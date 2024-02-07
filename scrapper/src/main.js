import * as cheerio from 'cheerio';
import { generateData } from './generate-data.js';
import logger from './logger.js';
import progressLogger from './progress-logger.js';
import { toCamelCase } from './utils.js';

async function main() {
    logger.start();

    const baseUrl = 'https://palworld.fandom.com';
    const indexUrl = `${baseUrl}/wiki/Paldeck`;
    const batchSize = 5;
    const minDelayBetweenBatchesMs = 1000;
    const maxDelayBetweenBatchesMs = 3000;

    const html = await (await fetch(indexUrl)).text();
    const $ = cheerio.load(html);

    logger.log('Searching pals...');

    const index = [];
    $('table.fandom-table tbody tr td:nth-child(3)').each((_, element) => {
        const href = $(element).find('a').attr('href');
        if (href) {
            index.push(href);
            progressLogger.updateProgress(`Link found: ${href}`);
        }
    });

    logger.log(`Found ${index.length} pals`);

    const pagesResponses = [];
    let i = 0;
    while (i < index.length) {
        progressLogger.updateProgress(
            `Requesting pages: ${i + 1} .. ${i + batchSize}`,
        );

        const batch = index.slice(i, i + batchSize);
        const batchPromises = batch.map((link) => fetch(`${baseUrl}${link}`));
        try {
            const batchResponses = await Promise.all(batchPromises);
            pagesResponses.push(...batchResponses);

            // Wait for delay before next batch
            if (i + batchSize < index.length) {
                const delay =
                    Math.floor(
                        Math.random() *
                            (maxDelayBetweenBatchesMs -
                                minDelayBetweenBatchesMs +
                                1),
                    ) + minDelayBetweenBatchesMs;
                await new Promise((resolve) => setTimeout(resolve, delay));
            }

            i += batchSize;
        } catch (err) {
            logger.log(`Failed fetch to ${i} .. ${i + batchSize - 1}`, err);
        }
    }
    progressLogger.updateProgress();

    const pagesHtmls = await Promise.all(
        pagesResponses.map((response) => response.text()),
    );

    logger.log('Scrapping pals data...');

    const pals = [];
    pagesHtmls.forEach((pageHtml, i) => {
        const $page = cheerio.load(pageHtml);

        const name = $page('.mw-page-title-main').text().trim();
        progressLogger.updateProgress(
            `Scrapping ${name} (${i + 1}/${pagesHtmls.length})...`,
        );

        const index = $page('[data-source="no"] div.pi-data-value')
            .text()
            .trim()
            .slice(1);

        const elements = [];
        $page('[data-source="ele1"] div.pi-data-value span').each(
            (_, element) => {
                elements.push(toCamelCase($page(element).text()));
            },
        );

        let food = 0;
        $page('div.pi-data-value img').each((_, item) => {
            if (item.attribs.alt === 'Food on icon') {
                food++;
            }
        });

        const abilities = {
            abilitiesCooling: 0,
            abilitiesFarming: 0,
            abilitiesGathering: 0,
            abilitiesGeneratingElectricity: 0,
            abilitiesHandiwork: 0,
            abilitiesKindling: 0,
            abilitiesLumbering: 0,
            abilitiesMedicineProduction: 0,
            abilitiesMining: 0,
            abilitiesPlanting: 0,
            abilitiesTransporting: 0,
            abilitiesWatering: 0,
        };

        $page('p:contains("Work Suitability:")')
            .next()
            .find('li')
            .each((_, element) => {
                const words = $page(element).text().split(' ');
                const value = words.splice(-1);
                const ability = words.join('');
                abilities[`abilities${ability}`] = parseInt(value);
            });

        const drops = [];
        $page('p:contains("Possible Drops:")')
            .next()
            .find('li')
            .each((_, element) => {
                const drop = toCamelCase($page(element).text());
                drops.push(drop);
            });

        const production = [];
        $page('p:contains("Farming Produce")')
            .next()
            .find('li')
            .each((_, element) => {
                const value = toCamelCase($page(element).text());
                production.push(value);
            });

        if (index !== '???') {
            pals.push({
                abilitiesCooling: abilities.abilitiesCooling,
                abilitiesFarming: abilities.abilitiesFarming,
                abilitiesGathering: abilities.abilitiesGathering,
                abilitiesGeneratingElectricity:
                    abilities.abilitiesGeneratingElectricity,
                abilitiesHandiwork: abilities.abilitiesHandiwork,
                abilitiesKindling: abilities.abilitiesKindling,
                abilitiesLumbering: abilities.abilitiesLumbering,
                abilitiesMedicineProduction:
                    abilities.abilitiesMedicineProduction,
                abilitiesMining: abilities.abilitiesMining,
                abilitiesPlanting: abilities.abilitiesPlanting,
                abilitiesTransporting: abilities.abilitiesTransporting,
                abilitiesWatering: abilities.abilitiesWatering,
                drops,
                elements,
                food,
                index,
                name,
                production,
            });
        }
    });
    progressLogger.updateProgress();

    logger.log(`Found data of ${pals.length} pals`);

    generateData(pals);
    process.exit(0);
}

main();

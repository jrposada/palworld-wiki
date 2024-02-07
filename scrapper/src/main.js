import * as cheerio from 'cheerio';
import { Logger } from './logger.js';

async function main() {
    const logger = new Logger();
    const baseUrl = 'https://palworld.fandom.com';
    const indexUrl = `${baseUrl}/wiki/Paldeck`;

    const html = await (await fetch(indexUrl)).text();
    const $ = cheerio.load(html);

    const index = [];
    $('table.fandom-table tbody tr td:nth-child(3)').each((_, element) => {
        const href = $(element).find('a').attr('href');
        if (href) {
            logger.log(`Link: ${href}`);
            index.push(href);
        }
    });

    logger.log();

    const pagesResponses = await Promise.all(
        index.slice(0, 2).map((link) => fetch(`${baseUrl}${link}`)),
    );
    const pagesHtmls = await Promise.all(
        pagesResponses.map((response) => response.text()),
    );

    const pals = [];
    pagesHtmls.forEach((pageHtml) => {
        const $page = cheerio.load(pageHtml);

        const name = $page('.mw-page-title-main').text().trim();
        logger.log(`Scrapping ${name}`);

        const index = parseInt(
            $page('[data-source="no"] div.pi-data-value')
                .text()
                .trim()
                .slice(1),
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

        pals.push({
            abilitiesCooling: abilities.abilitiesCooling,
            abilitiesFarming: abilities.abilitiesFarming,
            abilitiesGathering: abilities.abilitiesGathering,
            abilitiesGeneratingElectricity:
                abilities.abilitiesGeneratingElectricity,
            abilitiesHandiwork: abilities.abilitiesHandiwork,
            abilitiesKindling: abilities.abilitiesKindling,
            abilitiesLumbering: abilities.abilitiesLumbering,
            abilitiesMedicineProduction: abilities.abilitiesMedicineProduction,
            abilitiesMining: abilities.abilitiesMining,
            abilitiesPlanting: abilities.abilitiesPlanting,
            abilitiesTransporting: abilities.abilitiesTransporting,
            abilitiesWatering: abilities.abilitiesWatering,
            drops: '', // todo
            elements: '', // todo
            food,
            index,
            name,
            production: '', // todo
        });
    });

    process.exit(0);
}

main();

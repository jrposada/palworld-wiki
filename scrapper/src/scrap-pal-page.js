import * as cheerio from 'cheerio';
import logger from './logger.js';
import { toCamelCase } from './utils.js';

export async function scrapPalPage(url, allDrops) {
    logger.log(`Fetching ${url}...`);

    const html = await (await fetch(url)).text();
    const $ = cheerio.load(html);

    const name = $('.mw-page-title-main').text().trim();
    logger.log(`Scrapping ${name}...`);

    const index = $('[data-source="no"] div.pi-data-value')
        .text()
        .trim()
        .slice(1);

    const elements = [];
    $('[data-source="ele1"] div.pi-data-value span').each((_, element) => {
        elements.push(toCamelCase($(element).text()));
    });

    let food = 0;
    $('div.pi-data-value img').each((_, item) => {
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

    $('p:contains("Work Suitability:")')
        .next()
        .find('li')
        .each((_, element) => {
            const words = $(element).text().split(' ');
            const value = words.splice(-1);
            const ability = words.join('');
            abilities[`abilities${ability}`] = parseInt(value);
        });

    const possibleDrops = $('p:contains("Possible Drops:")');
    const dropsNormal = [];
    possibleDrops
        .next()
        .find('li:contains("Normal") ul li')
        .each((_, element) => {
            const text = $(element).text();

            const drop = toCamelCase(text);
            logger.log(`Normal drop found ${drop}`);
            dropsNormal.push(drop);
            allDrops.add(`"${drop}": "${text.trim()}",`);
        });
    if (!dropsNormal.length) {
        logger.log('No normal drops. Trying workaround...');
        possibleDrops
            .next()
            .next()
            .find('li')
            .first()
            .find('ul li')
            .each((_, element) => {
                const text = $(element).text();

                const drop = toCamelCase(text);
                logger.log(`Normal drop found ${drop}`);
                dropsNormal.push(drop);
                allDrops.add(`"${drop}": "${text.trim()}",`);
            });
    }

    const dropsBoss = [];
    possibleDrops
        .next()
        .find('li:contains("Boss") ul li')
        .each((_, element) => {
            const text = $(element).text();

            const drop = toCamelCase(text);
            logger.log(`Boss drop found ${drop}`);
            dropsBoss.push(drop);
            allDrops.add(`"${drop}": "${text.trim()}",`);
        });
    if (!dropsBoss.length) {
        logger.log('No boss drops. Trying workaround...');
        possibleDrops
            .next()
            .next()
            .find('li:contains("Boss") ul li')
            .each((_, element) => {
                const text = $(element).text();

                const drop = toCamelCase(text);
                logger.log(`Boss drop found ${drop}`);
                dropsBoss.push(drop);
                allDrops.add(`"${drop}": "${text.trim()}",`);
            });
    }

    if (!dropsNormal.length && !dropsBoss.length) {
        logger.log('No normal or boss drops. Trying workaround 2...');
        possibleDrops
            .next()
            .find('li')
            .each((_, element) => {
                const text = $(element).text();

                const drop = toCamelCase(text);
                logger.log(`Normal drop found ${drop}`);
                dropsNormal.push(drop);
                allDrops.add(`"${drop}": "${text.trim()}",`);
            });
    }

    const production = [];
    $('p:contains("Farming Produce")')
        .next()
        .find('li')
        .each((_, element) => {
            const value = toCamelCase($(element).text());
            production.push(value);
        });

    if (index !== '???') {
        return {
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
            dropsBoss,
            dropsNormal,
            elements,
            food,
            index,
            name,
            production,
            link: url,
        };
    }
}

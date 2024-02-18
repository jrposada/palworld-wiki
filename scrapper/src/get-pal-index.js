import * as cheerio from 'cheerio';
import logger from './logger.js';
import progressLogger from './progress-logger.js';

export async function getPalIndex(indexUrl) {
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

    return index;
}

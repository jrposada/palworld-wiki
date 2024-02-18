import { batch } from './batch.js';
import { generateData } from './generate-data.js';
import { getPalIndex } from './get-pal-index.js';
import logger from './logger.js';
import progressLogger from './progress-logger.js';
import { scrapPalPage } from './scrap-pal-page.js';

const baseUrl = 'https://palworld.fandom.com';
const indexUrl = `${baseUrl}/wiki/Paldeck`;
const batchSize = 10;
const minDelayBetweenBatchesMs = 500;
const maxDelayBetweenBatchesMs = 1500;

async function main() {
    logger.start();

    const index = await getPalIndex(indexUrl);
    logger.log(`Found ${index.length} pals`);

    logger.log('Scrapping pals data...');

    const allDrops = new Set();

    const pals = await batch(
        index.map(
            (link) => async () =>
                scrapPalPage(`${baseUrl}${link}`, allDrops, baseUrl),
        ),
        {
            maxDelayMs: maxDelayBetweenBatchesMs,
            minDelayMs: minDelayBetweenBatchesMs,
            size: batchSize,
        },
    );

    progressLogger.updateProgress();

    logger.log(`Found data of ${pals.length} pals and ${allDrops.size} drops`);

    generateData(pals, allDrops);
    process.exit(0);
}

main();

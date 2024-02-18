import logger from './logger.js';
import progressLogger from './progress-logger.js';
import { sleep } from './utils.js';

export async function batch(
    handlers,
    options = { maxDelayMs: 3000, minDelayMs: 1000, size: 5 },
) {
    const results = [];
    let i = 0;
    while (i < handlers.length) {
        progressLogger.updateProgress(
            `Processing batch: ${i + 1} .. ${i + options.size}`,
        );

        const batch = handlers.slice(i, i + options.size);
        try {
            const batchResults = await Promise.all(
                batch.map((handler) => handler()),
            );
            results.push(...batchResults);

            // Wait for delay before next batch
            if (i + options.size < handlers.length) {
                await sleep(options.minDelayMs, options.maxDelayMs);
            }
            i += options.size;
        } catch (err) {
            logger.log(
                `Failed fetch to ${i + 1} .. ${i + options.size}`,
                err.toString(),
            );
        }
    }

    return results;
}

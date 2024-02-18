import progressLogger from './progress-logger.js';

export function toCamelCase(value) {
    const pascal = value.replace(/\s/g, '');
    return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

export function beautifyCamelCase(value) {
    return (
        value
            // insert a space before all caps
            .replace(/([A-Z])/g, ' $1')
            // uppercase the first character
            .replace(/^./, function (str) {
                return str.toUpperCase();
            })
    );
}

export async function sleep(minDelayMs, maxDelayMs) {
    const delay =
        Math.floor(Math.random() * (maxDelayMs - minDelayMs + 1)) + minDelayMs;

    progressLogger.updateProgress(`batch sleeping for ${delay}ms`);

    await new Promise((resolve) => setTimeout(resolve, delay));
}

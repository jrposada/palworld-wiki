import createProgressFooter from 'cli-progress-footer';
import logger from './logger.js';

let progressFooter;

const progressLogger = {
    updateProgress(msg) {
        if (!progressFooter) {
            progressFooter = createProgressFooter();
            progressFooter.shouldAddProgressAnimationPrefix = true;
            progressFooter.progressAnimationPrefixFrames =
                progressFooter.progressAnimationPrefixFrames.map(
                    (frame) => `\x1b[91m${frame}\x1b[39m`,
                );
        }
        progressFooter.updateProgress(msg);
        logger.logFileOnly(msg);
    },
};
export default progressLogger;

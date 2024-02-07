import fs from 'node:fs';

const filename = './scrapper.log';

const logger = {
    start() {
        if (fs.existsSync(filename)) {
            fs.rmSync(filename);
        }
    },
    log(...args) {
        const formattedArgs = args
            .map((arg) => (typeof arg === 'object' ? JSON.stringify(arg) : arg))
            .join(', ');
        fs.appendFileSync(filename, formattedArgs.concat('\n'));
        console.log(formattedArgs);
    },
    logFileOnly(...args) {
        const formattedArgs = args
            .map((arg) => (typeof arg === 'object' ? JSON.stringify(arg) : arg))
            .join(', ');
        fs.appendFileSync(filename, formattedArgs.concat('\n'));
    },
};
export default logger;

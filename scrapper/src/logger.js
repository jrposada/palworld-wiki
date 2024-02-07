import fs from 'node:fs';

export class Logger {
    #filename = './scrapper.log';

    constructor() {
        if (fs.existsSync(this.#filename)) {
            fs.rmSync(this.#filename);
        }
    }

    log(...args) {
        const formattedArgs = args
            .map((arg) => (typeof arg === 'object' ? JSON.stringify(arg) : arg))
            .join(', ')
            .concat('\n');
        fs.appendFileSync(this.#filename, formattedArgs);
    }
}

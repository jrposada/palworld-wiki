const { Client } = require('pg');

export class Postgres {
    #client;

    constructor() {
        this.#client = new Client();
    }

    async initialize() {
        await this.#client.connect();
    }

    get() {
        this.#client.query();
        // const data = await client.query('SELECT * FROM public."Test"');

        // res.send(data.rows)

        // await client.end()
    }
}

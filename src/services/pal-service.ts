import { toPal, toPalDao } from '../infrastructure/data/pal-dao.js';
import { Postgres } from '../infrastructure/data/postgres.js';
import { Pal } from '../models/pal.js';

export class PalService {
    #db: Postgres;

    constructor() {
        if (
            !process.env.PG_DATABASE ||
            !process.env.PG_USER ||
            !process.env.PG_PASSWORD
        ) {
            throw new Error('Missing db connection data');
        }

        this.#db = new Postgres({
            database: process.env.PG_DATABASE,
            user: process.env.PG_USER,
            password: process.env.PG_PASSWORD,
        });
    }

    async initialize(): Promise<void> {
        await this.#db.connect();
    }

    async create(pal: Pal): Promise<{ isNew: boolean; data: Pal }> {
        const dao = toPalDao(pal);
        const dbData = await this.#db.create(dao);
        const data = toPal(dbData);

        return { isNew: dbData.isNewRecord, data };
    }
}

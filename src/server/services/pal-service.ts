import { Pal, PalEntity } from '../../models/pal.js';
import { Query } from '../../models/query.js';
import {
    PAL_DAO_MAPPER,
    palDao,
    toPalDao,
    toPalEntity,
} from '../infrastructure/data/pal-dao.js';
import { Postgres } from '../infrastructure/data/postgres.js';

export class PalService {
    readonly #db: Postgres<'pal'>;

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
            entities: {
                pal: { definition: palDao, mapper: PAL_DAO_MAPPER },
            },
        });
    }

    async initialize(): Promise<void> {
        await this.#db.connect();
    }

    async create(pal: Pal): Promise<PalEntity> {
        const dao = toPalDao(pal);
        const dbData = await this.#db.create('pal', dao);
        const data = toPalEntity(dbData);

        return data;
    }

    async get(query: Query): Promise<PalEntity[]> {
        const dbData = await this.#db.query('pal', query);
        const data = dbData.map((item) => toPalEntity(item));

        return data;
    }
}

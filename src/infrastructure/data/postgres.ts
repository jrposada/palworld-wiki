import { Model, Optional, Sequelize } from 'sequelize';
import { palDao } from './pal-dao.js';

export class Postgres {
    readonly #client: Sequelize;
    readonly #palDao;

    constructor(
        private readonly config: {
            database: string;
            password: string;
            user: string;
        },
    ) {
        this.#client = new Sequelize(
            `postgres://${this.config.user}:${this.config.password}@localhost:5432/${this.config.database}`,
        );

        this.#palDao = palDao(this.#client);
    }

    async connect() {
        try {
            console.log('connect');
            await this.#client.authenticate();
            await this.#client.sync();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            throw error;
        }
    }

    async create<TData extends Optional<any, string> | undefined>(
        dao: TData,
    ): Promise<Model> {
        const dbData = await this.#palDao.create(dao);
        return dbData;
    }
}

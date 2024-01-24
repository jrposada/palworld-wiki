import { Postgres } from '../infrastructure/data/postgres';

export class PalService {
    #db;

    constructor() {
        this.#db = new Postgres();
    }
}

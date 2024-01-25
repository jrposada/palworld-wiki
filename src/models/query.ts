import { Request } from 'express';

// TODO: Implement OData
export class Query {
    get filters() {
        return structuredClone(this.#filters);
    }

    get sorts() {
        return structuredClone(this.#sorts);
    }

    readonly #filters: Filter[] = [];
    readonly #sorts: Sort[] = [];

    constructor(query?: Request['query']) {
        if (!query) return;

        Object.entries(query).forEach(([field, value]) => {
            if (field.startsWith('sort')) {
                return;
            }

            this.#filters.push({
                field: field,
                value: value as any,
            });
        });
    }
}

export type Filter = {
    field: string;
    value: string;
};

export type Sort = {
    field: string;
    direction: 'asc' | 'desc';
};

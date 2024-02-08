import { ValueFormatterFunc } from 'ag-grid-community';
import { Pal } from 'shared/models/pal';

export const emptyValueFormatter: ValueFormatterFunc<Pal> = ({ value }) => {
    return value || '-';
};

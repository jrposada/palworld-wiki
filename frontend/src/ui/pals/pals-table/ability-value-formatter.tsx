import { ValueFormatterFunc } from 'ag-grid-community';
import { Pal } from 'shared/models/pal';

export const abilityValueFormatter: ValueFormatterFunc<Pal> = ({ value }) => {
    return value || '-';
};

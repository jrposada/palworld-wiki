import { ValueFormatterFunc } from 'ag-grid-community';
import { Pal } from 'shared/models/pal';

export const dropsValueFormatter: ValueFormatterFunc<Pal, string[]> = ({
    value,
    context: { t },
}) => {
    return (
        (value?.length &&
            value.map((item) => t(`pal.drop.${item}`)).join(', ')) ||
        '-'
    );
};

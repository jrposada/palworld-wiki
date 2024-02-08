import { ValueGetterFunc } from 'ag-grid-community';
import { Pal } from 'shared/models/pal';

export const dropsValueGetter: ValueGetterFunc<Pal> = ({
    data,
    context: { t },
}) => {
    return (
        (data?.drops?.length &&
            data?.drops.map((item) => t(`pal.drop.${item}`)).join(', ')) ||
        '-'
    );
};

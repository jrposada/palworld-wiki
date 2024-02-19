import { ValueGetterFunc } from 'ag-grid-community';
import { Pal } from 'shared/models/pal';

export const dropsBossValueGetter: ValueGetterFunc<Pal> = ({
    data,
    context: { t },
}) => {
    return (
        (data?.dropsBoss?.length &&
            data?.dropsBoss.map((item) => t(`pal.drop.${item}`)).join(', ')) ||
        '-'
    );
};

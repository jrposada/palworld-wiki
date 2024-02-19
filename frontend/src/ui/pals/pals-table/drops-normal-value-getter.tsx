import { ValueGetterFunc } from 'ag-grid-community';
import { Pal } from 'shared/models/pal';

export const dropsNormalValueGetter: ValueGetterFunc<Pal> = ({
    data,
    context: { t },
}) => {
    return (
        (data?.dropsNormal?.length &&
            data?.dropsNormal
                .map((item) => t(`pal.drop.${item}`))
                .join(', ')) ||
        '-'
    );
};

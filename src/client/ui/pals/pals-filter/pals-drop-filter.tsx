import { t } from 'i18next';
import { useMemo } from 'react';
import { Drop } from '../../../../models/drop';
import FilterButton, {
    FilterButtonProps,
} from '../../../ui-lib/filter-button/filter-button';

export type PalsDropFilterProps = {
    setState: React.Dispatch<React.SetStateAction<Record<Drop, boolean>>>;
    state: Record<Drop, boolean>;
};

function PalsDropFilter({
    state: { bone, innovativeTechnicalManual, largePalSoul },
    setState,
}: PalsDropFilterProps) {
    const id = 'pal-drop-filter-button';

    const options = useMemo<FilterButtonProps<Drop>['options']>(
        () => [
            { name: 'bone', value: bone, label: t('pal.drop.bone') },
            {
                name: 'innovativeTechnicalManual',
                value: innovativeTechnicalManual,
                label: t('pal.drop.innovativeTechnicalManual'),
            },
            {
                name: 'largePalSoul',
                value: largePalSoul,
                label: t('pal.drop.largePalSoul'),
            },
        ],
        [bone, innovativeTechnicalManual, largePalSoul],
    );

    return (
        <FilterButton<Drop>
            id={id}
            label={t('pal.filter.drop')}
            options={options}
            onChange={setState}
        />
    );
}
export default PalsDropFilter;

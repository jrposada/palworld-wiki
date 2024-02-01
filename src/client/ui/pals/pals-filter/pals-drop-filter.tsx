import { t } from 'i18next';
import { useMemo, useState } from 'react';
import FilterButton, {
    FilterButtonProps,
} from '../../../ui-lib/filter-button/filter-button';

type Option = 'bone' | 'innovativeTechnicalManual' | 'largePalSoul';

function PalsDropFilter() {
    const id = 'pal-drop-filter-button';

    const [{ bone, innovativeTechnicalManual, largePalSoul }, setState] =
        useState({
            bone: false,
            innovativeTechnicalManual: false,
            largePalSoul: false,
        });

    const options = useMemo<FilterButtonProps<Option>['options']>(
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
        <FilterButton<Option>
            id={id}
            label={t('pal.filter.drop')}
            options={options}
            onChange={setState}
        />
    );
}
export default PalsDropFilter;

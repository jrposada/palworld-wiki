import { t } from 'i18next';
import { useMemo } from 'react';
import { Pal } from '../../../../models/pal';
import FilterButton, {
    FilterButtonProps,
} from '../../../ui-lib/filter-button/filter-button';

type Option =
    | 'cooling'
    | 'farming'
    | 'gathering'
    | 'generatingElectricity'
    | 'handiwork'
    | 'kindling'
    | 'lumbering'
    | 'medicineProduction'
    | 'mining'
    | 'planting'
    | 'transporting'
    | 'watering';

export type PalsAbilityFilterProps = {
    setState: React.Dispatch<
        React.SetStateAction<Record<keyof Pal['abilities'], boolean>>
    >;
    state: Record<keyof Pal['abilities'], boolean>;
};

function PalsAbilityFilter({
    state: {
        cooling,
        farming,
        gathering,
        generatingElectricity,
        handiwork,
        kindling,
        lumbering,
        medicineProduction,
        mining,
        planting,
        transporting,
        watering,
    },
    setState,
}: PalsAbilityFilterProps) {
    const options = useMemo<FilterButtonProps<Option>['options']>(
        () => [
            {
                label: t('pal.ability.cooling'),
                name: 'cooling',
                value: cooling,
            },
            {
                label: t('pal.ability.farming'),
                name: 'farming',
                value: farming,
            },
            {
                label: t('pal.ability.gathering'),
                name: 'gathering',
                value: gathering,
            },
            {
                label: t('pal.ability.generatingElectricity'),
                name: 'generatingElectricity',
                value: generatingElectricity,
            },
            {
                label: t('pal.ability.handiwork'),
                name: 'handiwork',
                value: handiwork,
            },
            {
                label: t('pal.ability.kindling'),
                name: 'kindling',
                value: kindling,
            },
            {
                label: t('pal.ability.lumbering'),
                name: 'lumbering',
                value: lumbering,
            },
            {
                label: t('pal.ability.medicineProduction'),
                name: 'medicineProduction',
                value: medicineProduction,
            },
            { label: t('pal.ability.mining'), name: 'mining', value: mining },
            {
                label: t('pal.ability.planting'),
                name: 'planting',
                value: planting,
            },
            {
                label: t('pal.ability.transporting'),
                name: 'transporting',
                value: transporting,
            },
            {
                label: t('pal.ability.watering'),
                name: 'watering',
                value: watering,
            },
        ],
        [
            cooling,
            farming,
            gathering,
            generatingElectricity,
            handiwork,
            kindling,
            lumbering,
            medicineProduction,
            mining,
            planting,
            transporting,
            watering,
        ],
    );

    const id = 'pal-ability-filter-button';

    return (
        <FilterButton<Option>
            id={id}
            label={t('pal.filter.ability')}
            options={options}
            onChange={setState}
        />
    );
}
export default PalsAbilityFilter;

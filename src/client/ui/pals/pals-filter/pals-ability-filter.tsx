import { t } from 'i18next';
import { FunctionComponent, useMemo, useState } from 'react';
import PalsFilterButton, {
    PalsFilterButtonProps,
} from '../pals-filter-button/pals-filter-button';

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

const PalsAbilityFilter: FunctionComponent = () => {
    const [
        {
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
    ] = useState({
        cooling: false,
        farming: false,
        gathering: false,
        generatingElectricity: false,
        handiwork: false,
        kindling: false,
        lumbering: false,
        medicineProduction: false,
        mining: false,
        planting: false,
        transporting: false,
        watering: false,
    });

    const options = useMemo<PalsFilterButtonProps<Option>['options']>(
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
        <PalsFilterButton<Option>
            id={id}
            label={t('pal.filter.ability')}
            options={options}
            onChange={setState}
        />
    );
};
export default PalsAbilityFilter;

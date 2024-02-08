import { Container, Grid } from '@mui/material';
import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import { t } from 'i18next';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Pal } from 'shared/models/pal';
import PalsFilter, { PalsFilterProps } from '../pals-filter/pals-filter';
import { dropsValueGetter } from './drops-value-getter';
import { emptyValueFormatter } from './empty-value-formatter';
import {
    COOLING_IMAGE_TAG,
    FARMING_IMAGE_TAG,
    GATHERING_IMAGE_TAG,
    GENERATING_ELECTRICITY_IMAGE_TAG,
    HANDIWORK_IMAGE_TAG,
    KINDLING_IMAGE_TAG,
    LUMBERING_IMAGE_TAG,
    MEDICINE_PRODUCTION_IMAGE_TAG,
    MINING_IMAGE_TAG,
    PLANTING_IMAGE_TAG,
    TRANSPORTING_IMAGE_TAG,
    WATERING_IMAGE_TAG,
    palsTableAbilityComponentParams,
} from './pals-table-ability-header';

type PalsTableProps = {
    pals: Pal[] | undefined;
    onFilterChange: (filter: {
        ability: PalsFilterProps['abilityState'];
    }) => void;
};

const PalsTable: FunctionComponent<PalsTableProps> = ({
    pals,
    onFilterChange,
}) => {
    const [colDefs] = useState<AgGridReactProps<Pal>['columnDefs']>([
        {
            field: 'index',
            headerName: t('pal.table.header.index'),
        },
        {
            field: 'name',
            headerName: t('pal.table.header.name'),
            filter: 'agTextColumnFilter',
        },
        {
            field: 'drops',
            headerName: t('pal.drops'),
            valueGetter: dropsValueGetter,
            filter: 'agSetColumnFilter',
        },
        {
            field: 'abilities.cooling',
            headerName: t('pal.ability.cooling'),
            headerComponentParams:
                palsTableAbilityComponentParams(COOLING_IMAGE_TAG),
            valueFormatter: emptyValueFormatter,
        },
        {
            field: 'abilities.farming',
            headerName: t('pal.ability.farming'),
            headerComponentParams:
                palsTableAbilityComponentParams(FARMING_IMAGE_TAG),
            valueFormatter: emptyValueFormatter,
        },
        {
            field: 'abilities.gathering',
            headerName: t('pal.ability.gathering'),
            headerComponentParams:
                palsTableAbilityComponentParams(GATHERING_IMAGE_TAG),
            valueFormatter: emptyValueFormatter,
        },
        {
            field: 'abilities.generatingElectricity',
            headerName: t('pal.ability.generatingElectricity'),
            headerComponentParams: palsTableAbilityComponentParams(
                GENERATING_ELECTRICITY_IMAGE_TAG,
            ),
            valueFormatter: emptyValueFormatter,
        },
        {
            field: 'abilities.handiwork',
            headerName: t('pal.ability.handiwork'),
            headerComponentParams:
                palsTableAbilityComponentParams(HANDIWORK_IMAGE_TAG),
            valueFormatter: emptyValueFormatter,
        },
        {
            field: 'abilities.kindling',
            headerName: t('pal.ability.kindling'),
            headerComponentParams:
                palsTableAbilityComponentParams(KINDLING_IMAGE_TAG),
            valueFormatter: emptyValueFormatter,
        },
        {
            field: 'abilities.lumbering',
            headerName: t('pal.ability.lumbering'),
            headerComponentParams:
                palsTableAbilityComponentParams(LUMBERING_IMAGE_TAG),
            valueFormatter: emptyValueFormatter,
        },
        {
            field: 'abilities.medicineProduction',
            headerName: t('pal.ability.medicineProduction'),
            headerComponentParams: palsTableAbilityComponentParams(
                MEDICINE_PRODUCTION_IMAGE_TAG,
            ),
            valueFormatter: emptyValueFormatter,
        },
        {
            field: 'abilities.mining',
            headerName: t('pal.ability.mining'),
            headerComponentParams:
                palsTableAbilityComponentParams(MINING_IMAGE_TAG),
            valueFormatter: emptyValueFormatter,
        },
        {
            field: 'abilities.planting',
            headerName: t('pal.ability.planting'),
            headerComponentParams:
                palsTableAbilityComponentParams(PLANTING_IMAGE_TAG),
            valueFormatter: emptyValueFormatter,
        },
        {
            field: 'abilities.transporting',
            headerName: t('pal.ability.transporting'),
            headerComponentParams: palsTableAbilityComponentParams(
                TRANSPORTING_IMAGE_TAG,
            ),
            valueFormatter: emptyValueFormatter,
        },
        {
            field: 'abilities.watering',
            headerName: t('pal.ability.watering'),
            headerComponentParams:
                palsTableAbilityComponentParams(WATERING_IMAGE_TAG),
            valueFormatter: emptyValueFormatter,
        },
    ]);

    const [abilityFilterState, setAbilityFilterState] = useState<
        PalsFilterProps['abilityState']
    >({
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

    const [context] = useState({ t });

    const handleFilterChange = useRef(onFilterChange);

    useEffect(() => {
        handleFilterChange.current({
            ability: abilityFilterState,
        });
    }, [abilityFilterState]);

    return (
        <Container
            maxWidth={false}
            sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
            }}
        >
            <Grid item>
                <PalsFilter
                    abilitySetState={setAbilityFilterState}
                    abilityState={abilityFilterState}
                />
            </Grid>
            <Grid item sx={{ flexGrow: 1 }}>
                <div className="ag-theme-quartz" style={{ height: '100%' }}>
                    <AgGridReact<Pal>
                        context={context}
                        rowData={pals}
                        columnDefs={colDefs}
                    />
                </div>
            </Grid>
        </Container>
    );
};

export default PalsTable;
export type { PalsTableProps };

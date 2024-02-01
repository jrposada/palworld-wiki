import { Grid } from '@mui/material';
import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import { t } from 'i18next';
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { Pal } from '../../../../models/pal';
import PalsFilter, { PalsFilterProps } from '../pals-filter/pals-filter';

type PalsTableProps = {
    pals: Pal[] | undefined;
    onFilterChange: (filter: {
        ability: PalsFilterProps['abilityState'];
        drop: PalsFilterProps['dropState'];
    }) => void;
};

const PalsTable: FunctionComponent<PalsTableProps> = ({
    pals,
    onFilterChange,
}) => {
    const [colDefs] = useState<AgGridReactProps<Pal>['columnDefs']>([
        { field: 'index', headerName: t('pal.table.header.index') },
        { field: 'name', headerName: t('pal.table.header.name') },
        { field: 'abilities.cooling', headerName: t('pal.ability.cooling') },
        { field: 'abilities.farming', headerName: t('pal.ability.farming') },
        {
            field: 'abilities.gathering',
            headerName: t('pal.ability.gathering'),
        },
        {
            field: 'abilities.generatingElectricity',
            headerName: t('pal.ability.generatingElectricity'),
        },
        {
            field: 'abilities.handiwork',
            headerName: t('pal.ability.handiwork'),
        },
        { field: 'abilities.kindling', headerName: t('pal.ability.kindling') },
        {
            field: 'abilities.lumbering',
            headerName: t('pal.ability.lumbering'),
        },
        {
            field: 'abilities.medicineProduction',
            headerName: t('pal.ability.medicineProduction'),
        },
        { field: 'abilities.mining', headerName: t('pal.ability.mining') },
        { field: 'abilities.planting', headerName: t('pal.ability.planting') },
        {
            field: 'abilities.transporting',
            headerName: t('pal.ability.transporting'),
        },
        { field: 'abilities.watering', headerName: t('pal.ability.watering') },
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

    const [dropFilterState, setDropFilterState] = useState<
        PalsFilterProps['dropState']
    >({
        bone: false,
        innovativeTechnicalManual: false,
        largePalSoul: false,
    });

    const handleFilterChange = useRef(onFilterChange);

    useEffect(() => {
        handleFilterChange.current({
            ability: abilityFilterState,
            drop: dropFilterState,
        });
    }, [abilityFilterState, dropFilterState]);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <PalsFilter
                    abilitySetState={setAbilityFilterState}
                    abilityState={abilityFilterState}
                    dropSetState={setDropFilterState}
                    dropState={dropFilterState}
                />
            </Grid>
            <Grid item xs={12}>
                <div className="ag-theme-quartz" style={{ height: 500 }}>
                    <AgGridReact<Pal> rowData={pals} columnDefs={colDefs} />
                </div>
            </Grid>
        </Grid>
    );
};

export default PalsTable;
export type { PalsTableProps };

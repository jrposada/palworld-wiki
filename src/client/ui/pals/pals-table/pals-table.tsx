import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import { t } from 'i18next';
import { FunctionComponent, useMemo, useState } from 'react';
import { Pal } from '../../../../models/pal';

type PalsTableProps = {
    pals: Pal[] | undefined;
};

const PalsTable: FunctionComponent<PalsTableProps> = ({ pals }) => {
    const rowData = useMemo<AgGridReactProps<Pal>['rowData']>(
        () => pals,
        [pals],
    );

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

    return (
        <div className="ag-theme-quartz" style={{ height: 500 }}>
            <AgGridReact<Pal> rowData={rowData} columnDefs={colDefs} />
        </div>
    );
};

export default PalsTable;
export type { PalsTableProps };

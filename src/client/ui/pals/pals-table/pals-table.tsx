import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import { FunctionComponent, useMemo, useState } from 'react';
import { Pal } from '../../../../models/pal';

type PalsTableProps = {
    pals: Pal[] | undefined;
    loading: boolean;
};

const PalsTable: FunctionComponent<PalsTableProps> = ({ pals }) => {
    const rowData = useMemo<AgGridReactProps<Pal>['rowData']>(
        () => pals,
        [pals],
    );

    const [colDefs] = useState<AgGridReactProps<Pal>['columnDefs']>([
        { field: 'index' },
        { field: 'name' },
    ]);
    return (
        <div className="ag-theme-quartz" style={{ height: 500 }}>
            <AgGridReact<Pal> rowData={rowData} columnDefs={colDefs} />
        </div>
    );
};

export default PalsTable;
export type { PalsTableProps };

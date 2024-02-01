import { Grid } from '@mui/material';
import { FunctionComponent } from 'react';
import { useGetPals } from '../core/api/get-pals/get-pals';
import PalsTable, { PalsTableProps } from '../ui/pals/pals-table/pals-table';

const HomeRoute: FunctionComponent = () => {
    const { data } = useGetPals();

    const handleFilterChange: PalsTableProps['onFilterChange'] = () => {
        console.log('TODO');
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <PalsTable pals={data} onFilterChange={handleFilterChange} />
            </Grid>
        </Grid>
    );
};

export default HomeRoute;

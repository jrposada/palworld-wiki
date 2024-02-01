import { Grid } from '@mui/material';
import { FunctionComponent } from 'react';
import { useGetPals } from '../core/api/get-pals/get-pals';
import PalsFilter from '../ui/pals/pals-filter/pals-filter';
import PalsTable from '../ui/pals/pals-table/pals-table';

const HomeRoute: FunctionComponent = () => {
    const { data, isLoading } = useGetPals();

    console.log(data);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <PalsFilter />
            </Grid>
            <Grid item xs={12}>
                <PalsTable pals={data} loading={isLoading} />
            </Grid>
        </Grid>
    );
};

export default HomeRoute;

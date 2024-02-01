import { Grid } from '@mui/material';
import { FunctionComponent } from 'react';
import { useGetPals } from '../core/api/get-pals/get-pals';
import PalsTable from '../ui/pals/pals-table/pals-table';

const HomeRoute: FunctionComponent = () => {
    const { data, isLoading } = useGetPals();

    console.log(data);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <PalsTable pals={data} loading={isLoading} />
            </Grid>
        </Grid>
    );
};

export default HomeRoute;

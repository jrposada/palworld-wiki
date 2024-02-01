import { Grid } from '@mui/material';
import { FunctionComponent } from 'react';
import { useGetPals } from '../core/api/get-pals/get-pals';
import PalsTable from '../ui/pals/pals-table/pals-table';

const HomeRoute: FunctionComponent = () => {
    const { data } = useGetPals();

    console.log(data);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <PalsTable pals={data} />
            </Grid>
        </Grid>
    );
};

export default HomeRoute;

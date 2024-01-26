import { Grid, Paper } from '@mui/material';
import { FunctionComponent } from 'react';
import { useGetPals } from '../core/api/get-pals/get-pals';

const HomeRoute: FunctionComponent = () => {
    const { data } = useGetPals();

    console.log(data);

    return (
        <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    a
                </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    a
                </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    a
                </Paper>
            </Grid>
        </Grid>
    );
};

export default HomeRoute;

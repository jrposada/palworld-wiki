import { Grid } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import { useGetPals } from '../core/api/get-pals/get-pals';
import PalsTable, { PalsTableProps } from '../ui/pals/pals-table/pals-table';

const HomeRoute: FunctionComponent = () => {
    const [filter, setFilter] = useState<
        Arguments<typeof useGetPals>['0']['filter']
    >({ ability: {}, drop: {} });

    const { data } = useGetPals({ filter });

    const handleFilterChange: PalsTableProps['onFilterChange'] = (filter) => {
        setFilter(filter);
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

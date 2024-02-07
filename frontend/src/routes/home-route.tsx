import { Container } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import { Arguments } from 'shared/utils/arguments';
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
        <Container
            maxWidth={false}
            sx={{
                mt: 4,
                mb: 4,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <PalsTable pals={data} onFilterChange={handleFilterChange} />
        </Container>
    );
};

export default HomeRoute;

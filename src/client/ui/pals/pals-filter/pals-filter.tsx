import { Grid } from '@mui/material';
import { FunctionComponent } from 'react';
import PalsAbilityFilter from './pals-ability-filter';
import PalsDropFilter from './pals-drop-filter';

const PalsFilter: FunctionComponent = () => {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <PalsAbilityFilter />
            </Grid>
            <Grid item>
                <PalsDropFilter />
            </Grid>
        </Grid>
    );
};
export default PalsFilter;

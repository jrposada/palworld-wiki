import { Grid } from '@mui/material';
import { FunctionComponent } from 'react';
import PalsAbilityFilter from './pals-ability-filter';
import PalsDropFilter from './pals-drop-filter';

type PalsFilterProps = {
    onChange: () => void;
};

const PalsFilter: FunctionComponent<PalsFilterProps> = () => {
    // TODO: onChange
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
export type { PalsFilterProps };

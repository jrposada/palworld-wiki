import { Grid } from '@mui/material';
import PalsAbilityFilter, {
    PalsAbilityFilterProps,
} from './pals-ability-filter';

type PalsFilterProps = {
    abilitySetState: PalsAbilityFilterProps['setState'];
    abilityState: PalsAbilityFilterProps['state'];
};

function PalsFilter({ abilitySetState, abilityState }: PalsFilterProps) {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <PalsAbilityFilter
                    setState={abilitySetState}
                    state={abilityState}
                />
            </Grid>
            <Grid item></Grid>
        </Grid>
    );
}

export default PalsFilter;
export type { PalsFilterProps };

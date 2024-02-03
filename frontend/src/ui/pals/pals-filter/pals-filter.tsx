import { Grid } from '@mui/material';
import PalsAbilityFilter, {
    PalsAbilityFilterProps,
} from './pals-ability-filter';
import PalsDropFilter, { PalsDropFilterProps } from './pals-drop-filter';

type PalsFilterProps = {
    abilitySetState: PalsAbilityFilterProps['setState'];
    abilityState: PalsAbilityFilterProps['state'];
    dropSetState: PalsDropFilterProps['setState'];
    dropState: PalsDropFilterProps['state'];
};

function PalsFilter({
    abilitySetState,
    abilityState,
    dropSetState,
    dropState,
}: PalsFilterProps) {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <PalsAbilityFilter
                    setState={abilitySetState}
                    state={abilityState}
                />
            </Grid>
            <Grid item>
                <PalsDropFilter setState={dropSetState} state={dropState} />
            </Grid>
        </Grid>
    );
}

export default PalsFilter;
export type { PalsFilterProps };

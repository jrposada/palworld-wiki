import {
    Button,
    Checkbox,
    FormControlLabel,
    FormControlLabelProps,
    Menu,
    MenuItem,
} from '@mui/material';
import { t } from 'i18next';
import React, { FunctionComponent, useState } from 'react';

const PalsAbilityFilter: FunctionComponent = () => {
    const [
        {
            cooling,
            farming,
            gathering,
            generatingElectricity,
            handiwork,
            kindling,
            lumbering,
            medicineProduction,
            mining,
            planting,
            transporting,
            watering,
        },
        setState,
    ] = useState({
        cooling: false,
        farming: false,
        gathering: false,
        generatingElectricity: false,
        handiwork: false,
        kindling: false,
        lumbering: false,
        medicineProduction: false,
        mining: false,
        planting: false,
        transporting: false,
        watering: false,
    });
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event,
    ) => {
        setState((prev) => ({
            ...prev,
            [event.target.name]: event.target.checked,
        }));
    };

    const nameId = 'basic-button';
    const open = Boolean(anchorEl);

    return (
        <>
            <Button
                id={nameId}
                variant="contained"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {t('pal.filter.ability')}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': nameId,
                }}
            >
                <MenuItem>
                    <FormControlLabel
                        name="cooling"
                        checked={cooling}
                        onChange={
                            handleChange as unknown as FormControlLabelProps['onChange']
                        }
                        control={<Checkbox />}
                        label={t('pal.ability.cooling')}
                    />
                </MenuItem>
                <MenuItem>
                    <FormControlLabel
                        name="farming"
                        checked={farming}
                        onChange={
                            handleChange as unknown as FormControlLabelProps['onChange']
                        }
                        control={<Checkbox />}
                        label={t('pal.ability.farming')}
                    />
                </MenuItem>
                <MenuItem>
                    <FormControlLabel
                        name="gathering"
                        checked={gathering}
                        onChange={
                            handleChange as unknown as FormControlLabelProps['onChange']
                        }
                        control={<Checkbox />}
                        label={t('pal.ability.gathering')}
                    />
                </MenuItem>
                <MenuItem>
                    <FormControlLabel
                        name="generatingElectricity"
                        checked={generatingElectricity}
                        onChange={
                            handleChange as unknown as FormControlLabelProps['onChange']
                        }
                        control={<Checkbox />}
                        label={t('pal.ability.generatingElectricity')}
                    />
                </MenuItem>
                <MenuItem>
                    <FormControlLabel
                        name="handiwork"
                        checked={handiwork}
                        onChange={
                            handleChange as unknown as FormControlLabelProps['onChange']
                        }
                        control={<Checkbox />}
                        label={t('pal.ability.handiwork')}
                    />
                </MenuItem>
                <MenuItem>
                    <FormControlLabel
                        name="kindling"
                        checked={kindling}
                        onChange={
                            handleChange as unknown as FormControlLabelProps['onChange']
                        }
                        control={<Checkbox />}
                        label={t('pal.ability.kindling')}
                    />
                </MenuItem>
                <MenuItem>
                    <FormControlLabel
                        name="lumbering"
                        checked={lumbering}
                        onChange={
                            handleChange as unknown as FormControlLabelProps['onChange']
                        }
                        control={<Checkbox />}
                        label={t('pal.ability.lumbering')}
                    />
                </MenuItem>
                <MenuItem>
                    <FormControlLabel
                        name="medicineProduction"
                        checked={medicineProduction}
                        onChange={
                            handleChange as unknown as FormControlLabelProps['onChange']
                        }
                        control={<Checkbox />}
                        label={t('pal.ability.medicineProduction')}
                    />
                </MenuItem>
                <MenuItem>
                    <FormControlLabel
                        name="mining"
                        checked={mining}
                        onChange={
                            handleChange as unknown as FormControlLabelProps['onChange']
                        }
                        control={<Checkbox />}
                        label={t('pal.ability.mining')}
                    />
                </MenuItem>
                <MenuItem>
                    <FormControlLabel
                        name="planting"
                        checked={planting}
                        onChange={
                            handleChange as unknown as FormControlLabelProps['onChange']
                        }
                        control={<Checkbox />}
                        label={t('pal.ability.planting')}
                    />
                </MenuItem>
                <MenuItem>
                    <FormControlLabel
                        name="transporting"
                        checked={transporting}
                        onChange={
                            handleChange as unknown as FormControlLabelProps['onChange']
                        }
                        control={<Checkbox />}
                        label={t('pal.ability.transporting')}
                    />
                </MenuItem>
                <MenuItem>
                    <FormControlLabel
                        name="watering"
                        checked={watering}
                        onChange={
                            handleChange as unknown as FormControlLabelProps['onChange']
                        }
                        control={<Checkbox />}
                        label={t('pal.ability.watering')}
                    />
                </MenuItem>
            </Menu>
        </>
    );
};
export default PalsAbilityFilter;

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

const PalsDropFilter: FunctionComponent = () => {
    const [{ bone, innovativeTechnicalManual, largePalSoul }, setState] =
        useState({
            bone: false,
            innovativeTechnicalManual: false,
            largePalSoul: false,
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

    const nameId = 'pal-drop-filter-button';
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
                {t('pal.filter.drop')}
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
                        name="bone"
                        checked={bone}
                        onChange={
                            handleChange as unknown as FormControlLabelProps['onChange']
                        }
                        control={<Checkbox />}
                        label={t('pal.drop.bone')}
                    />
                </MenuItem>
                <MenuItem>
                    <FormControlLabel
                        name="innovativeTechnicalManual"
                        checked={innovativeTechnicalManual}
                        onChange={
                            handleChange as unknown as FormControlLabelProps['onChange']
                        }
                        control={<Checkbox />}
                        label={t('pal.drop.innovativeTechnicalManual')}
                    />
                </MenuItem>
                <MenuItem>
                    <FormControlLabel
                        name="largePalSoul"
                        checked={largePalSoul}
                        onChange={
                            handleChange as unknown as FormControlLabelProps['onChange']
                        }
                        control={<Checkbox />}
                        label={t('pal.drop.largePalSoul')}
                    />
                </MenuItem>
            </Menu>
        </>
    );
};
export default PalsDropFilter;

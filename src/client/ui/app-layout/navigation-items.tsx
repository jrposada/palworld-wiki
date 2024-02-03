import HomeIcon from '@mui/icons-material/Home';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from '@tanstack/react-router';
import { t } from 'i18next';

export const navigationItems = (
    <>
        <Link to="/">
            <ListItemButton>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={t('home')} />
            </ListItemButton>
        </Link>
        <Link to="/about">
            <ListItemButton>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="about" />
            </ListItemButton>
        </Link>

        {/* <Divider sx={{ my: 1 }} /> */}

        {/* <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader> */}
    </>
);

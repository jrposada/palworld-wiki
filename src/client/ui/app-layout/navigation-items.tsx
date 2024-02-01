import HomeIcon from '@mui/icons-material/Home';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export const navigationItems = (
    <>
        <ListItemButton>
            <ListItemIcon>
                <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItemButton>

        {/* <Divider sx={{ my: 1 }} /> */}

        {/* <ListSubheader component="div" inset>
            Saved reports
        </ListSubheader> */}
    </>
);

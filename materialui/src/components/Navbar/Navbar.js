import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './constants/navbarListItems';
import { navbarStyles } from './styles';
import { useNavigate } from 'react-router';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <Drawer
            sx={navbarStyles.drawer}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <List>
                {mainNavbarItems.map((item, index) => (
                    <ListItem key={item.id} onClick={() => navigate(item.route)} disablePadding>
                        <ListItemButton>
                            <ListItemIcon sx={navbarStyles.icons}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText sx={navbarStyles.text} primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Drawer>
    )
}

export default Navbar

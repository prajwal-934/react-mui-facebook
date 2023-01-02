import { Box, List, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';   
import PersonAddIcon from '@mui/icons-material/PersonAdd';    
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Sidebar = () => {
    return (
        <Box sx={{
            flex: 1,
            py: 3,
            px: 0,
            display: { xs: 'none', sm: 'block' }
        }}>
            <List>
                <ListItemButton >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home Page" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pages" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <GroupIcon />
                    </ListItemIcon>
                    <ListItemText primary="Groups" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <StorefrontIcon />
                    </ListItemIcon>
                    <ListItemText primary="Marketplace" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <PersonAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Friends" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DarkModeIcon />
                    </ListItemIcon>
                    <Switch />
                </ListItemButton>
            </List>
        </Box>
    )
}

export default Sidebar
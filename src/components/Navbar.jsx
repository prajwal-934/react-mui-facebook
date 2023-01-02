import { AppBar, Avatar, Badge, IconButton, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const SearchBar = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: 'white',
    width: '40%',
    padding: '0 4px',
    borderRadius: theme.shape.borderRadius
}))

const IconContainer = styled(Box)(({ theme }) => ({
    display: 'none',
    justifyContent: 'space-between',
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: 'flex'
    }
}))

const IconContainerSm = styled(Box)(({ theme }) => ({
    display: "none",
    justifyContent: 'space-between',
    gap: '10px',
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        display: "flex"
    }

}))



const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <Box>
            <AppBar position='sticky'>
                <StyledToolbar>
                    <Typography variant='h5' sx={{ display: { xs: 'none', sm: 'block' } }} >MyLogo</Typography>
                    <IconButton sx={{ display: { xs: 'block', sm: 'none', color: 'white' } }}>
                        <MenuIcon />
                    </IconButton>
                    <SearchBar>
                        <SearchIcon sx={{ color: 'grey' }} />
                        <InputBase placeholder='Search...' />
                    </SearchBar>
                    <IconContainer>
                        <Badge badgeContent={4} color="error">
                            <MailIcon color="white" />
                        </Badge>
                        <Badge badgeContent={4} color="error">
                            <ChatIcon color="white" />
                        </Badge>
                        <Avatar onClick={() => { setOpenMenu(true) }} sx={{ bgcolor: 'orange', width: '30px', height: '30px' }}>N</Avatar>
                    </IconContainer>
                    <IconContainerSm onClick={()=>{setOpenMenu(true)}}>
                        <Avatar sx={{ bgcolor: 'orange', width: '30px', height: '30px' }}>P</Avatar>
                        <Typography>PrajwalPatil</Typography>
                    </IconContainerSm>
                </StyledToolbar>

                <Menu
                    id="basic-menu"
                    open={openMenu}
                    onClose={() => { setOpenMenu(false) }}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}

                >
                    <MenuItem >My account</MenuItem>
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >Logout</MenuItem>
                </Menu>
            </AppBar>

        </Box>
    )
}

export default Navbar
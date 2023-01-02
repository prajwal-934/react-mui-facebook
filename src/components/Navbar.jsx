import { AppBar, Avatar, Badge, IconButton, InputBase, styled, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import ChatIcon from '@mui/icons-material/Chat';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const SearchBar = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    width: '40%',
    padding: '0 4px',
    borderRadius: theme.shape.borderRadius
}))

const IconContainer = styled(Box)({
    display : 'flex',
    justifyContent : 'space-between',
    gap : "20px",
    alignItems : "center"
})

const Navbar = () => {
    return (
        <Box>
            <AppBar position='sticky'>
                <StyledToolbar>
                    <Typography variant='h5' sx={{ display: { xs: 'none', sm: 'block' } }} >MyLogo</Typography>
                    <IconButton sx={{ display: { xs: 'block', sm: 'none', color: 'white' } }}>
                        <MenuIcon />
                    </IconButton>
                    <SearchBar>
                        <InputBase placeholder='Search...' />
                    </SearchBar>
                    <IconContainer>
                        <Badge badgeContent={4} color="error">
                            <MailIcon color="white" />
                        </Badge>
                        <Badge badgeContent={4} color="error">
                            <ChatIcon color="white" />
                        </Badge>
                        <Avatar sx={{ bgcolor: 'orange' , width : '30px' , height : '30px' }}>N</Avatar>
                    </IconContainer>
                </StyledToolbar>
            </AppBar>

        </Box>
    )
}

export default Navbar
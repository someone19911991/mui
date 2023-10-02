import React, {FC, useState} from 'react'
import {
    AppBar,
    styled,
    Toolbar,
    Typography,
    Box,
    InputBase,
    Badge,
    Avatar,
    Menu, MenuItem,
} from '@mui/material'
import { Mail, Notifications, Pets } from '@mui/icons-material'
import {IDrawerProps} from "../interfaces";

const StyledToolbar2 = styled(Toolbar)(({ theme }) => theme.mixins.toolbar)

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
}))

const StyledSearch = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
}))

const StyledIcons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
    },
}))

const StyledUserBox = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '10px',
    [theme.breakpoints.down('sm')]: {
        display: 'flex',
    },
}))

const NavBar:FC<IDrawerProps> = ({drawerOpen, setDrawerOpen}) => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <AppBar>
                <StyledToolbar>
                    <Typography
                        onClick={() => setDrawerOpen && setDrawerOpen(true)}
                        variant="h6"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        LOGO
                    </Typography>
                    <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
                    <StyledSearch>
                        <InputBase placeholder="search..." />
                    </StyledSearch>
                    <StyledIcons>
                        <Badge badgeContent={4} color="error">
                            <Mail />
                        </Badge>
                        <Badge badgeContent={4} color="error">
                            <Notifications />
                        </Badge>
                        <Avatar onClick={() => setMenuOpen(true)} sx={{ width: 30, height: 30 }} alt="Someone" />
                    </StyledIcons>
                    <StyledUserBox onClick={() => setMenuOpen(true)}>
                        <Avatar sx={{ width: 30, height: 30 }} />
                        <Typography variant="subtitle1">James</Typography>
                    </StyledUserBox>
                </StyledToolbar>
                <Menu
                    open={menuOpen}
                    onClose={() => setMenuOpen(false)}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My Account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
            </AppBar>
            <StyledToolbar2 />
        </>
    )
}

export default NavBar

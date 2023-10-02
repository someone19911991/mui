import React, { FC } from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemButton,
    ListItemText,
    Switch,
    Box,
    styled,
    Theme,
    SxProps,
} from '@mui/material'

import {
    Home,
    Pages,
    Groups,
    Person2,
    Settings,
    AccountBox,
    ModeNight,
} from '@mui/icons-material'
import {ISidebarProps} from "./DrawerSideBar";

type TStyledBox = {
    theme?: Theme
    sx?: SxProps
}

export const StyledBox = styled(Box)(({ theme, sx }: TStyledBox) => ({
    padding: theme?.spacing(2),
    sx,
}))

const SideBar: FC<ISidebarProps> = ({mode, setMode}) => {
    return (
        <StyledBox
            // sx={{ display: { xs: 'none', sm: 'block' }, flex: { sm: 2 } }}
            sx={{ flex: { sm: 2 }, mr: 2 }}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Homepage" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#pages">
                        <ListItemIcon>
                            <Pages />
                        </ListItemIcon>
                        <ListItemText primary="Pages" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#groups">
                        <ListItemIcon>
                            <Groups />
                        </ListItemIcon>
                        <ListItemText primary="Groups" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#friends">
                        <ListItemIcon>
                            <Person2 />
                        </ListItemIcon>
                        <ListItemText primary="Friends" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#settings">
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#profile">
                        <ListItemIcon>
                            <AccountBox />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#mode">
                        <ListItemIcon>
                            <ModeNight />
                        </ListItemIcon>
                        <Switch onChange={() => setMode(mode === 'light' ? 'dark' : 'light')} />
                    </ListItemButton>
                </ListItem>
            </List>
        </StyledBox>
    )
}

export default SideBar

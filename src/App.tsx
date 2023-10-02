import React, { useState } from 'react'
import {
    Box,
    Button,
    createTheme,
    Stack,
    SxProps,
    ThemeProvider,
} from '@mui/material'
import { styled } from '@mui/material'
import SideBar from './components/SideBar'
import Feed from './components/Feed'
import RightBar from './components/RightBar'
import NavBar from './components/NavBar'
import DrawerSideBar from './components/DrawerSideBar'
import Add from './components/Add'

// const StyledBtn = styled(Button)(({theme}) => ({
//     backgroundColor: theme.palette?.customColor?.first,
//     '&:hover':{
//         backgroundColor: 'yellow',
//     },
//     '&:disabled':{
//         backgroundColor: 'grey',
//         color: 'white'
//     }
// }))

interface IStyledStack {
    gap?: number
    otherProp?: number
    sx?: SxProps
}

const StyledStack = styled(Stack)<IStyledStack>(
    ({ theme, gap, otherProp, sx }) => ({
        marginTop: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: otherProp,
        sx,
    })
)

const App = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [mode, setMode] = useState<'light' | 'dark'>('light')

    const modeTheme = createTheme({
        palette: {
            mode
        },
    })

    return (
        <ThemeProvider theme={modeTheme}>
            <Box bgcolor={'background.default'} color={"text.primary"}>
                <NavBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
                <StyledStack
                    gap={0}
                    otherProp={0}
                    sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
                >
                    <DrawerSideBar
                        drawerOpen={drawerOpen}
                        setDrawerOpen={setDrawerOpen}
                        mode={mode}
                        setMode={setMode}
                    />
                    <Feed />
                    <RightBar />
                </StyledStack>
                <Add />
            </Box>
        </ThemeProvider>
    )
}

export default App

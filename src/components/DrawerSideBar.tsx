import React, { FC } from 'react'
import { Drawer, styled, Theme, DrawerProps, Box } from '@mui/material'
import SideBar from './SideBar'

interface IStyledDrawer {
    anchor: string
    open: boolean
    onClose: () => void
}

const StyledDrawer = styled(Drawer)(
    // ({ onClose, anchor, open }: IStyledDrawer & DrawerProps) => ({
    ({ onClose, anchor, open }) => ({
        display: 'block',
        open,
        onClose,
        anchor,
        ['@media (min-width: 1000px)']: {
            display: 'none',
        },
    })
)

const StyledSidebarWrapperBox = styled(Box)(() => ({
    display: 'block',
    ['@media (max-width: 1000px)']: {
        display: 'none',
    },
}))

interface IDrawerSidebarProps {
    drawerOpen: boolean
    setDrawerOpen: (arg: boolean) => void
    mode: 'light' | 'dark'
    setMode: (arg: 'light' | 'dark') => void
}

export type ISidebarProps = Omit<IDrawerSidebarProps, 'drawerOpen'|'setDrawerOpen'>

const DrawerSideBar: FC<IDrawerSidebarProps> = ({
    drawerOpen,
    setDrawerOpen,
    mode,
    setMode,
}) => {
    return (
        <>
            <StyledSidebarWrapperBox>
                <SideBar mode={mode} setMode={setMode} />
            </StyledSidebarWrapperBox>
            <StyledDrawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen && setDrawerOpen(false)}
            >
                <SideBar mode={mode} setMode={setMode} />
            </StyledDrawer>
        </>
    )
}

export default DrawerSideBar

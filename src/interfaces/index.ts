import React, {ReactNode} from "react"

export interface IDrawerProps{
    drawerOpen?: boolean,
    // setDrawerOpen?: (arg: (prev: boolean) => boolean) => void
    setDrawerOpen?: (arg: boolean) => void
    children?: ReactNode
}
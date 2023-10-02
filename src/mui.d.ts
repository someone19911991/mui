import {PaletteOptions} from "@mui/material";

declare module '@mui/material/styles' {
    interface Palette {
        customColor?: {
            main: string;
            dark?: string;
            light?: string;
            first?: string;
            second?: string;
        };
    }
}
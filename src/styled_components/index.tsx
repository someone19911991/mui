import {Box, styled, SxProps, Theme} from "@mui/material";


type TStyledBox = {
    theme?: Theme;
    sx?: SxProps
}

export const StyledBox = styled(Box)(({ theme, sx }: TStyledBox) => ({
    // padding: theme?.spacing(2),
    // position: 'fixed',
    sx,
}));
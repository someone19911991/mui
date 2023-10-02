import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider, createTheme} from "@mui/material";

// const theme = createTheme({
//     palette:{
//         primary: {
//             light: "#ef5350",
//             main: "#d32f2f",
//             dark: "#c62828",
//         },
//         customColor: {
//             main: '#ffc827',
//             dark: '#8899aa',
//             light: '#0f74da',
//             first: "#0F74DAFF"
//         },
//     }
// })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <ThemeProvider theme={theme}>
    <App />
  // </ThemeProvider>
);


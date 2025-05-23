import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client'
import App from './App.jsx';
import {CssBaseline} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App/>
        </ThemeProvider>
    </StrictMode>
)
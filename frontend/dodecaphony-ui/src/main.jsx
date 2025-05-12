
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    );
} else {
    console.error('Root element not found. Ensure you have <div id="root"></div> in index.html');
}
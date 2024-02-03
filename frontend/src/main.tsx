import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme
import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import { rootRoute } from './root-route';
import { routes } from './routes/routes';

const defaultTheme = createTheme();

const routeTree = rootRoute.addChildren(routes);
const router = createRouter({ routeTree });

console.log('root', import.meta.env.BASE_URL);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <RouterProvider
                router={router}
                basepath={import.meta.env.BASE_URL}
            />
        </ThemeProvider>
    </React.StrictMode>,
);

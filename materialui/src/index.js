import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Authentication from './pages/Authentication/Authentication';
import Database from './pages/Database/Database';
import Functions from './pages/Functions/Functions';
import Hosting from './pages/Hosting/Hosting';
import ML from './pages/ML/ML';
import Storage from './pages/Storage/Storage';
import { ThemeProvider } from '@mui/material';
import { dashboardTheme } from './dashboardTheme';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "authentication",
        element: <Authentication />,
      },
      {
        path: "database",
        element: <Database />,
      },
      {
        path: "functions",
        element: <Functions />,
      },
      {
        path: "hosting",
        element: <Hosting />,
      },
      {
        path: "machine-learning",
        element: <ML />,
      },
      {
        path: "storage",
        element: <Storage />,
      },
    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={dashboardTheme}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

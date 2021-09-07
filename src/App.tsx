import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import ThemeContextProvider from './context/ThemeContext';
import ToastContextProvider from './context/ToastContext';
import Routes from './routes';

const App: React.FC<{}> = () => {
    return (
        <ThemeContextProvider>
            <ToastContextProvider>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </ToastContextProvider>
        </ThemeContextProvider>
    );
};

export default App;

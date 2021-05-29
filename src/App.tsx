import React, { useContext } from 'react';
import './App.scss';
import ThemeContextProvider, { ThemeContext } from './context/ThemeContext';

const App: React.FC<{}> = () => {
    const { theme } = useContext(ThemeContext); 

    return (
        <ThemeContextProvider>
            <div className='App'>
                <h1 style={{ color: theme.themePrimary }}>Hello from Appunti</h1>
            </div>
        </ThemeContextProvider>
    );
};

export default App;

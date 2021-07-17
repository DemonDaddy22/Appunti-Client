import React from 'react';
import './App.scss';
import AppHeader from './components/AppHeader';
import ThemeContextProvider from './context/ThemeContext';
import BooksFinder from './screens/BooksFinder';

const App: React.FC<{}> = () => {
    return (
        <ThemeContextProvider>
            <div className="App">
                <AppHeader label="Appunti" />
                <BooksFinder />
            </div>
        </ThemeContextProvider>
    );
};

export default App;

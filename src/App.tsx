import React from 'react';
import './App.scss';
import ThemeContextProvider from './context/ThemeContext';
import BooksFinder from './screens/BooksFinder';

const App: React.FC<{}> = () => {
    return (
        <ThemeContextProvider>
            <div className="App">
                <BooksFinder />
            </div>
        </ThemeContextProvider>
    );
};

export default App;

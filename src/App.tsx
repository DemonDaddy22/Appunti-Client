import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import ThemeContextProvider from './context/ThemeContext';
import BooksFinder from './screens/BooksFinder';

const App: React.FC<{}> = () => {
    return (
        <ThemeContextProvider>
            <div className="App">
                <Navbar />
                <BooksFinder />
            </div>
        </ThemeContextProvider>
    );
};

export default App;

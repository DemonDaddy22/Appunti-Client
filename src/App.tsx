import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import ThemeContextProvider from './context/ThemeContext';
import { NAVBAR_SCROLL_BREAKPOINT_HEIGHT } from './resources/constants';
import BooksFinder from './screens/BooksFinder';

// TODO- dynamically update padding top of app based on height of navbar
const App: React.FC<{}> = () => {
    return (
        <ThemeContextProvider>
            <div
                className="App"
                style={{ paddingTop: NAVBAR_SCROLL_BREAKPOINT_HEIGHT }}
            >
                <Navbar />
                <BooksFinder />
            </div>
        </ThemeContextProvider>
    );
};

export default App;

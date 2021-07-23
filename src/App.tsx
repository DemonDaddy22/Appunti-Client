import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import ThemeContextProvider from './context/ThemeContext';
import { NAVBAR_SCROLL_BREAKPOINT_HEIGHT } from './resources/constants';
import BooksFinder from './screens/BooksFinder';
import { throttle } from './utils';

// TODO- dynamically update padding top of app based on height of navbar
const App: React.FC<{}> = () => {
    const navbarRef = useRef<HTMLElement | null>(null);

    const [navbarHeight, setNavbarHeight] = useState<number | undefined>(0);

    const handleWindowResize = useCallback(
        throttle(() => {
            const navbarOffsetHeight = navbarRef.current?.offsetHeight;
            if (navbarHeight !== navbarOffsetHeight) {
                setNavbarHeight(navbarOffsetHeight);
            }
        }),
        [navbarRef.current?.offsetHeight]
    );

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <ThemeContextProvider>
            <div
                className="App"
                style={{ paddingTop: (navbarHeight || 0) + 32 }}
            >
                <Navbar navbarRef={navbarRef} />
                <BooksFinder />
            </div>
        </ThemeContextProvider>
    );
};

export default App;

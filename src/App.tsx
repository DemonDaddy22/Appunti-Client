import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import ThemeContextProvider from './context/ThemeContext';
import BooksFinder from './screens/BooksFinder';
import { throttle } from './utils';

const App: React.FC<{}> = () => {
    const navbarRef = useRef<HTMLElement | null>(null);

    const [navbarHeight, setNavbarHeight] = useState<number | undefined>(0);

    const handleWindowResize = useCallback(
        throttle(() => {
            const navbarOffsetHeight = navbarRef.current?.offsetHeight;
            if (navbarHeight !== navbarOffsetHeight) {
                setNavbarHeight(navbarOffsetHeight);
            }
        }, 50),
        [navbarRef.current?.offsetHeight]
    );

    useEffect(() => setNavbarHeight(navbarRef?.current?.offsetHeight), []);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, [handleWindowResize]);

    return (
        <ThemeContextProvider>
            <div
                className="App"
                style={{ paddingTop: (navbarHeight || 0) + 4 }}
            >
                <Navbar navbarRef={navbarRef} />
                <BooksFinder />
            </div>
        </ThemeContextProvider>
    );
};

export default App;

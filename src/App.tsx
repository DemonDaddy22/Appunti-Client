import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import ThemeContextProvider from './context/ThemeContext';
import BooksFinder from './screens/BooksFinder';
import Modal from './ui-components/Modal';
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
                <Modal header="Appunti">
                    <p>
                        Lorem ipsum ullamco excepteur non amet enim qui veniam
                        sint ex Lorem elit elit irure sunt. Magna et excepteur
                        ex eiusmod minim laborum nostrud qui velit cillum
                        reprehenderit dolore nisi. Do voluptate eiusmod eu
                        aliquip esse ex excepteur mollit voluptate. Cillum ad
                        Lorem veniam officia reprehenderit cupidatat.
                    </p>
                    <p>
                        Lorem ipsum ullamco excepteur non amet enim qui veniam
                        sint ex Lorem elit elit irure sunt. Magna et excepteur
                        ex eiusmod minim laborum nostrud qui velit cillum
                        reprehenderit dolore nisi. Do voluptate eiusmod eu
                        aliquip esse ex excepteur mollit voluptate. Cillum ad
                        Lorem veniam officia reprehenderit cupidatat.
                    </p>
                    <p>
                        Lorem ipsum ullamco excepteur non amet enim qui veniam
                        sint ex Lorem elit elit irure sunt. Magna et excepteur
                        ex eiusmod minim laborum nostrud qui velit cillum
                        reprehenderit dolore nisi. Do voluptate eiusmod eu
                        aliquip esse ex excepteur mollit voluptate. Cillum ad
                        Lorem veniam officia reprehenderit cupidatat.
                    </p>
                    <p>
                        Lorem ipsum ullamco excepteur non amet enim qui veniam
                        sint ex Lorem elit elit irure sunt. Magna et excepteur
                        ex eiusmod minim laborum nostrud qui velit cillum
                        reprehenderit dolore nisi. Do voluptate eiusmod eu
                        aliquip esse ex excepteur mollit voluptate. Cillum ad
                        Lorem veniam officia reprehenderit cupidatat.
                    </p>
                    <p>
                        Lorem ipsum ullamco excepteur non amet enim qui veniam
                        sint ex Lorem elit elit irure sunt. Magna et excepteur
                        ex eiusmod minim laborum nostrud qui velit cillum
                        reprehenderit dolore nisi. Do voluptate eiusmod eu
                        aliquip esse ex excepteur mollit voluptate. Cillum ad
                        Lorem veniam officia reprehenderit cupidatat.
                    </p>
                    <p>
                        Lorem ipsum ullamco excepteur non amet enim qui veniam
                        sint ex Lorem elit elit irure sunt. Magna et excepteur
                        ex eiusmod minim laborum nostrud qui velit cillum
                        reprehenderit dolore nisi. Do voluptate eiusmod eu
                        aliquip esse ex excepteur mollit voluptate. Cillum ad
                        Lorem veniam officia reprehenderit cupidatat.
                    </p>
                    <p>
                        Lorem ipsum ullamco excepteur non amet enim qui veniam
                        sint ex Lorem elit elit irure sunt. Magna et excepteur
                        ex eiusmod minim laborum nostrud qui velit cillum
                        reprehenderit dolore nisi. Do voluptate eiusmod eu
                        aliquip esse ex excepteur mollit voluptate. Cillum ad
                        Lorem veniam officia reprehenderit cupidatat.
                    </p>
                    <p>
                        Lorem ipsum ullamco excepteur non amet enim qui veniam
                        sint ex Lorem elit elit irure sunt. Magna et excepteur
                        ex eiusmod minim laborum nostrud qui velit cillum
                        reprehenderit dolore nisi. Do voluptate eiusmod eu
                        aliquip esse ex excepteur mollit voluptate. Cillum ad
                        Lorem veniam officia reprehenderit cupidatat.
                    </p>
                    <p>
                        Lorem ipsum ullamco excepteur non amet enim qui veniam
                        sint ex Lorem elit elit irure sunt. Magna et excepteur
                        ex eiusmod minim laborum nostrud qui velit cillum
                        reprehenderit dolore nisi. Do voluptate eiusmod eu
                        aliquip esse ex excepteur mollit voluptate. Cillum ad
                        Lorem veniam officia reprehenderit cupidatat.
                    </p>
                    <p>
                        Lorem ipsum ullamco excepteur non amet enim qui veniam
                        sint ex Lorem elit elit irure sunt. Magna et excepteur
                        ex eiusmod minim laborum nostrud qui velit cillum
                        reprehenderit dolore nisi. Do voluptate eiusmod eu
                        aliquip esse ex excepteur mollit voluptate. Cillum ad
                        Lorem veniam officia reprehenderit cupidatat.
                    </p>
                    <p>
                        Lorem ipsum ullamco excepteur non amet enim qui veniam
                        sint ex Lorem elit elit irure sunt. Magna et excepteur
                        ex eiusmod minim laborum nostrud qui velit cillum
                        reprehenderit dolore nisi. Do voluptate eiusmod eu
                        aliquip esse ex excepteur mollit voluptate. Cillum ad
                        Lorem veniam officia reprehenderit cupidatat.
                    </p>
                </Modal>
            </div>
        </ThemeContextProvider>
    );
};

export default App;

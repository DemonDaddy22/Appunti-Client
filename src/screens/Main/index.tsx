import React, { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import { IRouterProps } from '../../types/screens';
import { throttle } from '../../utils';

interface IProps extends IRouterProps {
    children?: React.ReactNode;
}

const Main: React.FC<IProps> = ({ children }) => {
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
        <div style={{ paddingTop: (navbarHeight || 0) + 4 }}>
            <Navbar navbarRef={navbarRef} />
            {children}
        </div>
    );
};

export default Main;

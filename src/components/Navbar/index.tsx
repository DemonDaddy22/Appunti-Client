/* eslint-disable prettier/prettier */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { NAVBAR_SCROLL_BREAKPOINT_HEIGHT } from '../../resources/constants';
import { throttle } from '../../utils';
import AppHeader from '../AppHeader';
import ThemeToggler from '../ThemeToggler';
import classes from './styles.module.scss';

const Navbar: React.FC<INavbar> = (props) => {
    const { style, navbarRef } = props;
    const { getThemedValue } = useContext(ThemeContext);

    const [isPageScrolling, setIsPageScrolling] = useState<boolean>(false);

    const handlePageScrolling = useCallback(throttle(() => {
        const navbarHeight = (navbarRef?.current?.offsetHeight || NAVBAR_SCROLL_BREAKPOINT_HEIGHT) - 4;
        setIsPageScrolling(
            window.scrollY >= navbarHeight/2 ? true : false
        );
    }), [window.scrollY]);

    useEffect(() => {
        window.addEventListener('scroll', handlePageScrolling);
        return () => window.removeEventListener('scroll', handlePageScrolling);
    }, []);

    return (
        <nav
            ref={navbarRef}
            className={classes.navbar}
            style={{
                ...style,
                backgroundColor: isPageScrolling
                    ? getThemedValue(
                        'rgba(255, 255, 255, 0.1)',
                        'rgba(32, 38, 54, 0.25)'
                    )
                    : 'transparent',
                backdropFilter: isPageScrolling
                    ? 'blur(10px) saturate(120%) contrast(60%) brightness(135%)'
                    : 'none'
            }}
        >
            <AppHeader showIcon={false} label="Appunti" style={{ flex: 1 }} />
            <ThemeToggler />
        </nav>
    );
};

export default Navbar;

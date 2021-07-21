/* eslint-disable prettier/prettier */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { NAVBAR_SCROLL_BREAKPOINT_HEIGHT } from '../../resources/constants';
import AppHeader from '../AppHeader';
import ThemeToggler from '../ThemeToggler';
import classes from './styles.module.scss';

// TODO- throttle page scrolling function calls
const Navbar: React.FC<INavbar> = (props) => {
    const { style } = props;
    const { getThemedValue } = useContext(ThemeContext);

    const [isPageScrolling, setIsPageScrolling] = useState<boolean>(false);

    const handlePageScrolling = useCallback(() => {
        setIsPageScrolling(
            window.scrollY > NAVBAR_SCROLL_BREAKPOINT_HEIGHT ? true : false
        );
    }, [window.scrollY]);

    useEffect(() => {
        window.addEventListener('scroll', handlePageScrolling);
        return () => window.removeEventListener('scroll', handlePageScrolling);
    }, []);

    return (
        <nav
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

import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import AppHeader from '../AppHeader';
import ThemeToggler from '../ThemeToggler';
import classes from './styles.module.scss';

// TODO- add event listener to update background color of navbar on scrolling
const Navbar: React.FC<INavbar> = (props) => {
    const { style } = props;
    const { getThemedValue } = useContext(ThemeContext);

    return (
        <div
            className={classes.navbar}
            style={{
                ...style,
                backgroundColor: getThemedValue(
                    'rgba(255, 255, 255, 0.1)',
                    'rgba(32, 38, 54, 0.25)'
                ),
            }}
        >
            <AppHeader showIcon={false} label="Appunti" style={{ flex: 1 }} />
            <ThemeToggler />
        </div>
    );
};

export default Navbar;

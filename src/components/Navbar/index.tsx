import React from 'react';
import AppHeader from '../AppHeader';
import classes from './styles.module.scss';

const Navbar: React.FC<INavbar> = (props) => {
    const { style } = props;
    return (
        <div className={classes.navbar} style={style}>
            <AppHeader label="Appunti" style={{ flex: 1 }} />
        </div>
    );
};

export default Navbar;

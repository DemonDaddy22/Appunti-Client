import React from 'react';
import Quill from '../../assets/icons/Quill';
import classes from './styles.module.scss';

const AppHeader: React.FC<IAppHeader> = (props) => {
    const { label, showIcon, style } = props;

    return (
        <div className={classes.headerContainer}>
            <Quill />
            <div className={classes.header} style={style}>
                {label}
            </div>
        </div>
    );
};

export default AppHeader;

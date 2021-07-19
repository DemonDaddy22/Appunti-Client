import React from 'react';
import Quill from '../../assets/icons/Quill';
import classes from './styles.module.scss';

// TODO- make header responsive
// TODO- create navbar
const AppHeader: React.FC<IAppHeader> = (props) => {
    const { label, showIcon, style } = props;

    return (
        <div className={classes.headerContainer}>
            {showIcon && (
                <div className={classes.iconWrapper}>
                    <Quill style={{ height: 'inherit', width: 'inherit' }} />
                </div>
            )}
            <div className={classes.header} style={style}>
                {label}
            </div>
        </div>
    );
};

export default AppHeader;

AppHeader.defaultProps = { showIcon: true };

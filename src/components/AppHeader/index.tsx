import React from 'react';
import Quill from '../../assets/icons/Quill';
import classes from './styles.module.scss';

const AppHeader: React.FC<IAppHeader> = (props) => {
    const { label, showIcon, style, labelStyle } = props;

    return (
        <div className={classes.headerContainer} style={style}>
            {showIcon && (
                <div className={classes.iconWrapper}>
                    <Quill style={{ height: 'inherit', width: 'inherit' }} />
                </div>
            )}
            <div className={classes.header} style={labelStyle}>
                {label}
            </div>
        </div>
    );
};

export default AppHeader;

AppHeader.defaultProps = { showIcon: true };

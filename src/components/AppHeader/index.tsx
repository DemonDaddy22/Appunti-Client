import React from 'react';
import { Link } from 'react-router-dom';
import Quill from '../../assets/icons/Quill';
import { HOMEPAGE_PATH } from '../../resources/constants';
import { IAppHeader } from '../../types/components';
import classes from './styles.module.scss';

const AppHeader: React.FC<IAppHeader> = (props) => {
    const { label, showIcon, style, labelStyle } = props;

    return (
        <Link
            to={HOMEPAGE_PATH}
            className={classes.headerContainer}
            style={style}
        >
            {showIcon && (
                <div className={classes.iconWrapper}>
                    <Quill style={{ height: 'inherit', width: 'inherit' }} />
                </div>
            )}
            <div className={classes.header} style={labelStyle}>
                {label}
            </div>
        </Link>
    );
};

export default AppHeader;

AppHeader.defaultProps = { showIcon: true };

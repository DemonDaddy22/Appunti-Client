/* eslint-disable indent */
import React from 'react';
import Cross from '../../assets/icons/Cross';
import Exclamation from '../../assets/icons/Exclamation';
import Info from '../../assets/icons/Info';
import Tick from '../../assets/icons/Tick';
import Warning from '../../assets/icons/Warning';
import { WHITE } from '../../resources/colors';
import { TOAST_POSITIONS, TOAST_VARIANTS } from '../../resources/constants';
import IconButton from '../Button/IconButton';
import classes from './styles.module.scss';

const Toast: React.FC<IToast> = React.memo((props) => {
    const { label, position, variant, onClose, style } = props;

    const getToastBackgroundClass = () => {
        switch (variant) {
            case TOAST_VARIANTS.SUCCESS:
                return classes.toastSuccess;
            case TOAST_VARIANTS.ERROR:
                return classes.toastError;
            case TOAST_VARIANTS.WARNING:
                return classes.toastWarning;
            case TOAST_VARIANTS.INFO:
            default:
                return classes.toastInfo;
        }
    };

    const getToastPositionClass = () => {
        switch (position) {
            case TOAST_POSITIONS.TOPLEFT:
                return classes.toastTopLeft;
            case TOAST_POSITIONS.TOPCENTER:
                return classes.toastTopCenter;
            case TOAST_POSITIONS.TOPRIGHT:
                return classes.toastTopRight;
            case TOAST_POSITIONS.BOTTOMRIGHT:
                return classes.toastBottomRight;
            case TOAST_POSITIONS.BOTTOMCENTER:
                return classes.toastBottomCenter;
            case TOAST_POSITIONS.BOTTOMLEFT:
            default:
                return classes.toastBottomLeft;
        }
    };

    const getToastIcon = () => {
        let ToastIcon = null;
        switch (variant) {
            case TOAST_VARIANTS.SUCCESS:
                ToastIcon = Tick;
                break;
            case TOAST_VARIANTS.ERROR:
                ToastIcon = Exclamation;
                break;
            case TOAST_VARIANTS.WARNING:
                ToastIcon = Warning;
                break;
            case TOAST_VARIANTS.INFO:
            default:
                ToastIcon = Info;
                break;
        }
        return <ToastIcon color={WHITE} />;
    };

    return (
        <div
            className={`${
                classes.toastContainer
            } ${getToastBackgroundClass()} ${getToastPositionClass()}`}
            style={style}
        >
            {getToastIcon()}
            <div className={classes.toastLabel}>{label}</div>
            <IconButton onClick={onClose} showRipple={false}>
                <Cross color={WHITE} style={{ width: 14, height: 14 }} />
            </IconButton>
        </div>
    );
});

export default Toast;

Toast.defaultProps = {
    position: TOAST_POSITIONS.BOTTOMLEFT,
    variant: TOAST_VARIANTS.INFO,
    onClose: () => {},
};

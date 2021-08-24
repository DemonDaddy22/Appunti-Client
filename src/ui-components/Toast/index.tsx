/* eslint-disable indent */
import React from 'react';
import { TOAST_POSITIONS, TOAST_VARIANTS } from '../../resources/constants';
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
    // position - top and bottom
    // case 1 - success -> tick icon - text - close
    // case 2 - error -> error icon - text - close
    // case 3 - warn -> warn icon - text - close
    // case 4 - info -> info icon - text - close
    return (
        <div
            className={`${
                classes.toastContainer
            } ${getToastBackgroundClass()} ${getToastPositionClass()}`}
            style={style}
        >
            {label}
        </div>
    );
});

export default Toast;

Toast.defaultProps = {
    position: TOAST_POSITIONS.BOTTOMLEFT,
    variant: TOAST_VARIANTS.INFO,
    onClose: () => {},
};

/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import Cross from '../../assets/icons/Cross';
import Exclamation from '../../assets/icons/Exclamation';
import Info from '../../assets/icons/Info';
import Tick from '../../assets/icons/Tick';
import Warning from '../../assets/icons/Warning';
import { WHITE } from '../../resources/colors';
import { TOAST_DURATION, TOAST_VARIANTS } from '../../resources/constants';
import { isEmptyString } from '../../utils';
import IconButton from '../Button/IconButton';
import classes from './styles.module.scss';

const Toast: React.FC<IToast> = React.memo((props) => {
    const { label, variant, onClose, style } = props;

    const [timerID, setTimerID] = useState<any>(null);

    useEffect(() => {
        const id = setTimeout(onClose, TOAST_DURATION);
        setTimerID(id);
        return () => clearTimeout(id);
    }, []);

    const handleToastClose = (e: React.MouseEvent) => {
        clearTimeout(timerID);
        onClose();
        e.stopPropagation();
    };

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

    return !isEmptyString(label) ? (
        <div
            className={`${classes.toastContainer} ${getToastBackgroundClass()}`}
            style={style}
        >
            {getToastIcon()}
            <div className={classes.toastLabel}>{label}</div>
            <IconButton onClick={handleToastClose} showRipple={false}>
                <Cross color={WHITE} style={{ width: 14, height: 14 }} />
            </IconButton>
        </div>
    ) : null;
});

export default Toast;

Toast.defaultProps = {
    variant: TOAST_VARIANTS.INFO,
    onClose: () => {},
};

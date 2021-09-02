/* eslint-disable indent */
import React, { useState } from 'react';
import { TOAST_POSITIONS } from '../resources/constants';
import Toast from '../ui-components/Toast';
import { generateRandomID } from '../utils';
import classes from './styles.module.scss';

const ToastContextValue: IToastContextValue = {
    toasts: [],
    addToast: () => {},
    deleteToast: () => {},
};

export const ToastContext = React.createContext(ToastContextValue);

interface IProps extends IContext {
    position?:
        | 'top-left'
        | 'top-center'
        | 'top-right'
        | 'bottom-left'
        | 'bottom-center'
        | 'bottom-right'
        | string;
}

const ToastContextProvider: React.FC<IProps> = (props) => {
    const { children, position = TOAST_POSITIONS.BOTTOMLEFT } = props;

    const [toasts, setToasts] = useState<Array<IToastValue>>([]);

    const addToast = (toast: IToast) => {
        const id = generateRandomID();
        setToasts((prevToasts) => [...prevToasts, { id, toast }]);
    };

    const deleteToast = (id: number) => {
        setToasts((prevToasts) =>
            prevToasts.filter((toast) => toast?.id !== id)
        );
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

    return (
        <ToastContext.Provider
            value={{
                toasts,
                addToast,
                deleteToast,
            }}
        >
            {children}
            <div
                className={`${
                    classes.toastsContainer
                } ${getToastPositionClass()}`}
            >
                {toasts.map((toast) => (
                    <Toast
                        {...toast?.toast}
                        key={toast.id}
                        onClose={() => deleteToast(toast.id)}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

export default ToastContextProvider;

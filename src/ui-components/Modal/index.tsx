import React, { useCallback, useEffect, useRef, useState } from 'react';
import Cross from '../../assets/icons/Cross';
import { RED_600 } from '../../resources/colors';
import { throttle } from '../../utils';
import IconButton from '../Button/IconButton';
import Divider from '../Divider';
import classes from './styles.module.scss';

const Modal: React.FC<IModal> = (props) => {
    const {
        open,
        closeOnBackdropClick,
        onClose,
        header,
        backdropStyle,
        containerStyle,
        contentStyle,
        headerStyle,
        iconStyle,
        children,
    } = props;

    const modalRef = useRef<HTMLDivElement | null>(null);
    const modalHeaderRef = useRef<HTMLDivElement | null>(null);

    const [contentHeight, setContentHeight] = useState<number>(0);

    const handleWindowResize = useCallback(
        throttle(() => {
            const modalHeight = modalRef?.current?.clientHeight || 0;
            const modalHeaderHeight =
                modalHeaderRef?.current?.clientHeight || 0;
            setContentHeight(modalHeight - modalHeaderHeight);
        }, 50),
        [modalRef.current?.clientHeight, modalHeaderRef.current?.clientHeight]
    );

    const handleBackdropClick = useCallback(
        (e: React.MouseEvent) => {
            if (!closeOnBackdropClick) return;

            const rects = modalRef?.current?.getClientRects();
            if (!rects?.length) return;

            const { top, left, bottom, right } = rects[0];
            const positionX = e?.clientX;
            const positionY = e?.clientY;

            if (
                positionX >= left &&
                positionX <= right &&
                positionY >= top &&
                positionY <= bottom
            ) {
                return;
            }

            onClose();
        },
        [closeOnBackdropClick, onClose, modalRef?.current?.getClientRects()]
    );

    useEffect(() => {
        setContentHeight(
            (modalRef?.current?.clientHeight || 0) -
                (modalHeaderRef?.current?.clientHeight || 0)
        );
        if (open) document.body.classList.add(classes.overflowHidden);
        return () => document.body.classList.remove(classes.overflowHidden);
    }, [children, open]);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, [handleWindowResize]);

    return open ? (
        <div
            className={classes.modalBackdrop}
            style={backdropStyle}
            onClick={handleBackdropClick}
        >
            <div
                ref={modalRef}
                className={classes.modalContainer}
                style={containerStyle}
            >
                <div
                    ref={modalHeaderRef}
                    className={classes.modalHeaderContainer}
                >
                    <div className={classes.modalHeader} style={headerStyle}>
                        {header}
                    </div>
                    <IconButton
                        onClick={onClose}
                        style={iconStyle}
                        transform="rotate(90deg)"
                    >
                        <Cross
                            color={RED_600}
                            style={{ width: 24, height: 24 }}
                        />
                    </IconButton>
                </div>
                <Divider
                    numOfDashes={1}
                    style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}
                />
                <div
                    className={classes.modalContent}
                    style={{ ...contentStyle, height: contentHeight }}
                >
                    {children}
                </div>
            </div>
        </div>
    ) : null;
};

export default Modal;

Modal.defaultProps = {
    closeOnBackdropClick: true,
    backdropStyle: {},
    containerStyle: {},
    contentStyle: {},
    headerStyle: {},
    iconStyle: {},
};

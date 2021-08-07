import React from 'react';
import Cross from '../../assets/icons/Cross';
import { RED_600 } from '../../resources/colors';
import IconButton from '../Button/IconButton';
import classes from './styles.module.scss';

const Modal: React.FC<IModal> = (props) => {
    const {
        header,
        backdropStyle,
        containerStyle,
        contentStyle,
        headerStyle,
        iconStyle,
    } = props;

    return (
        <div className={classes.modalBackdrop} style={backdropStyle}>
            <div className={classes.modalContainer} style={containerStyle}>
                <div className={classes.headerContainer}>
                    <div className={classes.header} style={headerStyle}>
                        {header}
                    </div>
                    <IconButton onClick={() => {}} style={iconStyle}>
                        <Cross color={RED_600} />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Modal;

/*

(for small screens, backdrop disappears and content takes full height and width)

Header                      X
-----------------------------

<-  scrollable content  ->

*/

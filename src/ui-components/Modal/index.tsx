import classes from './styles.module.scss';

const Modal = () => {
    return (
        <div className={classes.modalBackdrop}>
            <div className={classes.modalContainer}></div>
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

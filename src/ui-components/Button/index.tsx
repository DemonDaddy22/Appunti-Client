import React from 'react';
import classes from './styles.module.scss';

const Button: React.FC<IButton> = (props) => {
    const { children, onClick, style } = props;

    return (
        <button onClick={onClick} className={classes.button} style={style}>
            {children}
        </button>
    );
};

export default Button;

Button.defaultProps = { style: {} };

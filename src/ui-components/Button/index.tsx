import React from 'react';
import classes from './styles.module.scss';

// TODO - create styled components to use colors from props for hovered and active states
const Button: React.FC<IButton> = (props) => {
    const { children, onClick, style } = props;

    return (
        <button onClick={onClick} className={classes.button} style={style}>
            {children}
        </button>
    );
};

export const ButtonOutlined: React.FC<IButtonOutlined> = (props) => {
    const { children, color, borderColor, onClick, style } = props;

    return (
        <button
            onClick={onClick}
            className={classes.buttonOutlined}
            style={{
                color: color,
                borderColor: borderColor,
                ...style,
            }}
        >
            {children}
        </button>
    );
};

export default Button;

Button.defaultProps = { style: {} };
ButtonOutlined.defaultProps = { style: {} };

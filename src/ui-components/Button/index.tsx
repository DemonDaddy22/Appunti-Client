import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { StyledButton, StyledButtonOutlined } from './styles';

const Button: React.FC<IButton> = (props) => {
    const { theme } = useContext(ThemeContext);
    const {
        children,
        color = theme.textOpposite,
        backgroundColor = theme.themePrimary,
        borderColor = theme.themePrimary,
        onClick,
        style,
        disabled,
    } = props;

    return (
        <StyledButton
            color={color}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            onClick={onClick}
            style={style}
            disabled={disabled}
        >
            {children}
        </StyledButton>
    );
};

export const ButtonOutlined: React.FC<IButtonOutlined> = (props) => {
    const { theme } = useContext(ThemeContext);
    const {
        children,
        color = theme.themePrimary,
        onClick,
        style,
        disabled,
    } = props;

    return (
        <StyledButtonOutlined
            color={color}
            onClick={onClick}
            style={style}
            disabled={disabled}
        >
            {children}
        </StyledButtonOutlined>
    );
};

export default Button;

Button.defaultProps = { style: {}, disabled: false };
ButtonOutlined.defaultProps = { style: {}, disabled: false };

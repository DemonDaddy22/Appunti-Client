import React, { useCallback, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { StyledInput, StyledInputContainer } from './styles';

const Input: React.FC<IInput> = (props) => {
    const { theme } = useContext(ThemeContext);
    const {
        value,
        name,
        placeholder,
        type,
        color = theme.themeSecondary,
        borderColor = theme.borderColor,
        onChange,
        style,
        containerStyle,
    } = props;

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value),
        [onChange]
    );

    return (
        <StyledInputContainer style={containerStyle}>
            <StyledInput
                color={color}
                borderColor={borderColor}
                type={type}
                value={value}
                placeholder={placeholder}
                name={name}
                onChange={handleChange}
                style={style}
            ></StyledInput>
            <span className="focus-border">
                <i></i>
            </span>
        </StyledInputContainer>
    );
};

export default Input;

Input.defaultProps = {
    type: 'text',
    style: {},
};

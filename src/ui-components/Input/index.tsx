import React, { useCallback, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { StyledInput } from './styles';

const Input: React.FC<IInput> = (props) => {
    const { theme } = useContext(ThemeContext);
    const {
        value,
        name,
        type,
        color = theme.themeSecondary,
        borderColor = theme.borderColor,
        onChange,
        style,
    } = props;

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value),
        [onChange]
    );

    return (
        <StyledInput
            color={color}
            borderColor={borderColor}
            type={type}
            value={value}
            name={name}
            onChange={handleChange}
            style={style}
        ></StyledInput>
    );
};

export default Input;

Input.defaultProps = {
    type: 'text',
    style: {},
};

import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { StyledLabel } from './styles';

const Label: React.FC<ILabel> = (props) => {
    const { theme } = useContext(ThemeContext);

    const {
        label,
        required = false,
        style,
        color = theme.textContrastLight,
    } = props;

    return (
        <StyledLabel color={color} style={style}>
            {label}
            {required ? <sup style={{ marginLeft: 2 }}>*</sup> : null}
        </StyledLabel>
    );
};

export default Label;

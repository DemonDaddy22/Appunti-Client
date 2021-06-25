import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { StyledLabel } from './styles';

const Label: React.FC<ILabel> = (props) => {
    const { theme } = useContext(ThemeContext);

    const { label, style, color = theme.text } = props;

    return (
        <StyledLabel color={color} style={style}>
            {label}
        </StyledLabel>
    );
};

export default Label;

import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import StyledIconButton from './styles';

const IconButton: React.FC<IIconButton> = (props) => {
    const { children, onClick, disabled, showRipple, style, transform } = props;

    const { theme } = useContext(ThemeContext);

    return (
        <StyledIconButton
            backgroundColor={theme.borderColor}
            style={style}
            disabled={disabled}
            onClick={!disabled ? onClick : () => {}}
            showRipple={showRipple}
            transform={transform}
        >
            {children}
        </StyledIconButton>
    );
};

export default IconButton;

IconButton.defaultProps = {
    disabled: false,
    onClick: () => {},
    showRipple: true,
    style: {},
    transform: null,
};

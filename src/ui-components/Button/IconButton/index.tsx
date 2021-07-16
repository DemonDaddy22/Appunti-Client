import React from 'react';
import styled from 'styled-components';

// TODO- add ripple background which can be toggled based on a boolean value
const StyledIconButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    filter: brightness(0.8) opacity(80%);
    outline: none;
    transition: filter 0.25s;

    &:hover {
        filter: brightness(1.25) opacity(100%);
    }
`;

const IconButton: React.FC<IIconButton> = (props) => {
    const { children, onClick, disabled, style } = props;

    return (
        <StyledIconButton style={style} disabled={disabled} onClick={onClick}>
            {children}
        </StyledIconButton>
    );
};

export default IconButton;

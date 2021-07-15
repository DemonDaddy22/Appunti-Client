import React from 'react';

// TODO - on hover, change the brightness of button
const IconButton: React.FC<IIconButton> = (props) => {
    const { children, onClick, disabled, style } = props;

    return (
        <button style={style} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
};

export default IconButton;

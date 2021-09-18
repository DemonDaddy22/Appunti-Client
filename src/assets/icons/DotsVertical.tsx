import React from 'react';

const DotsVertical: React.FC<IIcon> = (props) => {
    const { color, style } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={color}
            style={{ ...style, transition: 'fill 0.25s' }}
        >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
    );
};

export default DotsVertical;

DotsVertical.defaultProps = {
    style: {
        height: 32,
        width: 32,
    },
};

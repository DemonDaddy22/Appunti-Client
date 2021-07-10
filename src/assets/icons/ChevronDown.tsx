import React from 'react';

/* eslint-disable max-len */
const ChevronDown: React.FC<IIcon> = (props) => {
    const { color, style } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={color}
            style={{ ...style, transition: 'fill 0.25s' }}
        >
            <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export default ChevronDown;

ChevronDown.defaultProps = {
    style: {
        height: 16,
        width: 16,
    },
};

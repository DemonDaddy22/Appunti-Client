/* eslint-disable max-len */
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Quill: React.FC<IIcon> = (props) => {
    const { style } = props;

    const { getThemedValue } = useContext(ThemeContext);
    const stroke = getThemedValue('#303030', '#202636');

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15.467 15.494"
            style={style}
        >
            <g
                id="Group_5"
                data-name="Group 5"
                transform="translate(-2165.631 -286.352)"
            >
                <g
                    id="Group_4"
                    data-name="Group 4"
                    transform="matrix(-0.695, -0.719, 0.719, -0.695, 2173.143, 306.794)"
                >
                    <g id="pen">
                        <path
                            id="Path_6"
                            data-name="Path 6"
                            d="M10.74,5.671a4,4,0,0,1,5.657,0c1.1,1.1,2.491,5.7,3.083,7.983a.622.622,0,0,1-.758.758c-2.288-.592-6.878-1.98-7.982-3.084a4,4,0,0,1,0-5.657Z"
                            transform="translate(-5.568 -0.5)"
                            fill="rgba(255,168,29,0.69)"
                            stroke={stroke}
                            style={{ transition: 'stroke 0.25s, fill 0.25s' }}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                        />
                        <circle
                            id="Ellipse_5"
                            data-name="Ellipse 5"
                            cx="1"
                            cy="1"
                            r="1"
                            transform="translate(7 7)"
                            fill="rgba(72,44,0,0.85)"
                            stroke={stroke}
                            style={{ transition: 'stroke 0.25s, fill 0.25s' }}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                        />
                        <line
                            id="Line_27"
                            data-name="Line 27"
                            x2="5.046"
                            y2="5.046"
                            transform="translate(8.704 8.704)"
                            fill="none"
                            stroke={stroke}
                            style={{ transition: 'stroke 0.25s' }}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                        />
                        <path
                            id="Path_7"
                            data-name="Path 7"
                            d="M2.35,1.777"
                            transform="translate(2.15 4.223)"
                            fill="rgba(255,168,29,0.69)"
                            stroke={stroke}
                            style={{ transition: 'stroke 0.25s, fill 0.25s' }}
                            strokeLinecap="round"
                            strokeWidth="1"
                        />
                    </g>
                </g>
                <line
                    id="Line_34"
                    data-name="Line 34"
                    x2="5"
                    transform="translate(2170.742 301.094) rotate(1)"
                    fill="none"
                    stroke={stroke}
                    style={{ transition: 'stroke 0.25s' }}
                    strokeLinecap="round"
                    strokeWidth="1"
                />
            </g>
        </svg>
    );
};

export default Quill;

Quill.defaultProps = {
    style: {
        height: 64,
        width: 64,
    },
};

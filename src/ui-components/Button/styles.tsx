import styled from 'styled-components';
import { BLACK_30, WHITE_TRANSPARENT_90 } from '../../resources/colors';

export const StyledButtonOutlined = styled.button`
    border: 1px solid ${(props: IButtonOutlined) => props.color};
    border-radius: 4px;
    background-color: transparent;
    color: ${(props) => props.color};
    cursor: pointer;
    filter: brightness(1);
    font-weight: 500;
    letter-spacing: 0.25px;
    outline: none;
    padding: 0.75rem 1rem;
    text-transform: uppercase;
    transition: background-color 0.25s, border 0.25s, color 0.25s, filter 0.1s;

    &:hover {
        background-color: ${(props: IButtonOutlined) => props.color};
        color: ${WHITE_TRANSPARENT_90};
        outline: none;
    }

    &:active {
        filter: brightness(0.75);
    }
`;

export const StyledButton = styled.button`
    background-color: ${(props: IButton) => props.backgroundColor};
    border: 1px solid ${(props: IButton) => props.borderColor};
    border-radius: 4px;
    box-shadow: none;
    color: ${(props) => props.color};
    cursor: pointer;
    filter: brightness(1);
    font-weight: 500;
    letter-spacing: 0.25px;
    outline: none;
    padding: 0.75rem 1rem;
    text-transform: uppercase;
    transition: background-color 0.25s, border 0.25s, box-shadow 0.25s,
        color 0.25s, filter 0.25s;

    &:hover {
        box-shadow: 0 2px 8px ${BLACK_30};
        filter: brightness(1.15);
        outline: none;
    }

    &:active {
        filter: brightness(0.85);
    }
`;

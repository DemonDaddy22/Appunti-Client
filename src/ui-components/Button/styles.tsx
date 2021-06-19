/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { BLACK_30, THEME_PRIMARY_ACCENT3, WHITE_TRANSPARENT_90 } from '../../resources/colors';
import { isColorDark } from '../../utils';

export const StyledButtonOutlined = styled.button`
    border: 1px solid ${(props: IColor) => props.color};
    border-radius: 4px;
    background-color: transparent;
    color: ${(props) => props.color};
    cursor: pointer;
    filter: brightness(1);
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.25px;
    outline: none;
    padding: 0.6rem 0.85rem;
    text-transform: uppercase;
    transition: background-color 0.25s, border 0.25s, color 0.25s, filter 0.1s;

    &:hover {
        background-color: ${(props: IColor) => props.color};
        color: ${(props: IColor) => isColorDark(props.color) ? WHITE_TRANSPARENT_90 : THEME_PRIMARY_ACCENT3};
        outline: none;
    }

    &:active {
        filter: brightness(0.75);
    }

    @media (min-width: 1024px) {
        font-size: 0.9rem;
        padding: 0.7rem 0.95rem;
    }

    @media (min-width: 1500px) {
        font-size: 1rem;
        padding: 0.75rem 1rem;
    }
`;

export const StyledButton = styled.button`
    background-color: ${(props: IColors) => props.backgroundColor};
    border: 1px solid ${(props: IColors) => props.borderColor};
    border-radius: 4px;
    box-shadow: none;
    color: ${(props) => props.color};
    cursor: pointer;
    filter: brightness(1);
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.25px;
    outline: none;
    padding: 0.6rem 0.85rem;
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

    @media (min-width: 1024px) {
        font-size: 0.9rem;
        padding: 0.7rem 0.95rem;
    }

    @media (min-width: 1500px) {
        font-size: 1rem;
        padding: 0.75rem 1rem;
    }
`;

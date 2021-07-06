/* eslint-disable indent */

import styled from 'styled-components';
import { isHexColor, rgbToHex } from '../../utils';

export const StyledInputContainer = styled.div`
    border: 1px solid;
    border-color: ${(props: IColors) => {
        const borderColor = props.borderColor || '';
        return isHexColor(borderColor) ? borderColor : rgbToHex(borderColor);
    }}9F;
    border-radius: 4px;
    display: inline-flex;
    font-family: inherit;
    margin: 4px 0;
    padding: 0;
    transition: border 0.25s;

    &:hover {
        border-color: ${({ borderColor }: IColors) => borderColor};
    }

    & input {
        background-color: transparent;
        border: none;
        border-top-left-radius: inherit;
        border-bottom-left-radius: inherit;
        color: ${({ color }: IColors) => color};
        font-family: inherit;
        font-size: 1.05rem;
        outline: none;
        padding: 0.8rem 0.6rem;
        transition: color 0.25s;

        @media (min-width: 1024px) {
            font-size: 1.1rem;
            padding: 0.9rem 0.7rem;
        }

        @media (min-width: 1500px) {
            font-size: 1.15rem;
            padding: 1rem 0.8rem;
        }

        &::placeholder {
            color: ${(props: IColors) => {
                const color = props.color || '';
                return isHexColor(color) ? color : rgbToHex(color);
            }}AF;
        }
    }
`;

export const StyledInputButton = styled.button`
    align-items: center;
    background-color: ${({ backgroundColor }: IBackgroundColor) =>
        backgroundColor};
    border: none;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    cursor: pointer;
    display: inline-flex;
    filter: brightness(1);
    font-size: 1.05rem;
    font-weight: 900;
    justify-content: center;
    outline: none;
    padding: 0.8rem 0.6rem;
    transition: background-color 0.25s, filter 0.1s;

    &:hover {
        filter: brightness(0.85);
    }

    @media (min-width: 1024px) {
        font-size: 1.1rem;
        padding: 0.9rem 0.7rem;
    }

    @media (min-width: 1500px) {
        font-size: 1.15rem;
        padding: 1rem 0.8rem;
    }
`;

export const StyledMenu = styled.ul`
    border: ${({ isOpen }: ISelectMenu) => (isOpen ? '1px solid' : 'none')};
    border-color: ${({ borderColor }: ISelectMenu) => borderColor};
    border-radius: 4px;
    left: 50%;
    list-style: none;
    margin: ${({ isOpen }: ISelectMenu) => (isOpen ? '0.5rem auto 0' : 0)};
    max-width: 16rem;
    padding: 0;
    position: absolute;
    transform: translateX(-50%);
    width: 60%;
    transition: border 0.25s;

    @media (min-width: 1500px) {
        max-width: 18rem;
    }
`;

export const StyledMenuItem = styled.li`
    background-color: ${({ backgroundColor, isHighlighted }: ISelectItem) =>
        `${backgroundColor}${isHighlighted ? 'AF' : ''}`};
    color: ${({ color, selectedColor, isSelected }: ISelectItem) =>
        isSelected ? selectedColor : color};
    cursor: pointer;
    font-weight: ${({ isSelected }: ISelectItem) =>
        isSelected ? 'bold' : 'inherit'};
    padding: 0.5rem 0.75rem;
    text-align: start;
    transition: background-color 0.25s, color 0.25s;

    &:first-of-type {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }

    &:last-of-type {
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
    }
`;

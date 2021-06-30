/* eslint-disable indent */
import styled from 'styled-components';
import { isHexColor, rgbToHex } from '../../utils';

export const StyledInputContainer = styled.div`
    margin: 0.25rem 0;
    position: relative;
`;

export const StyledInput = styled.input`
    background: transparent;
    border: 1px solid;
    border-color: ${(props: IColors) => {
        const borderColor = props.borderColor || '';
        return isHexColor(borderColor) ? borderColor : rgbToHex(borderColor);
    }}9F;
    border-radius: 4px;
    color: ${(props: IColors) => props.color};
    font-size: 1.05rem;
    outline: none;
    padding: 0.8rem 0.6rem;
    width: 100%;
    transition: border 0.25s;

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

    &:hover {
        border-color: ${(props: IColors) => props.borderColor};
    }

    & ~ .focus-border:before,
    & ~ .focus-border:after {
        background-color: ${(props: IColors) => props.color};
        content: '';
        height: 2px;
        left: 0;
        position: absolute;
        top: 0;
        width: 0;
        transition: 0.3s;

        @media (min-width: 1024px) {
            transition: 0.5s;
        }
    }

    & ~ .focus-border i:before,
    & ~ .focus-border i:after {
        background-color: ${(props: IColors) => props.color};
        content: '';
        height: 0;
        left: 0;
        position: absolute;
        top: 0;
        width: 2px;
        transition: 0.4s;

        @media (min-width: 1024px) {
            transition: 0.6s;
        }
    }

    & ~ .focus-border:after,
    & ~ .focus-border i:after {
        bottom: 0;
        left: auto;
        right: 0;
        top: auto;
    }

    &:focus ~ .focus-border:before,
    &:focus ~ .focus-border:after {
        width: 100%;
        transition: 0.3s;

        @media (min-width: 1024px) {
            transition: 0.5s;
        }
    }

    &:focus ~ .focus-border i:before,
    &:focus ~ .focus-border i:after {
        height: 100%;
        transition: 0.4s;

        @media (min-width: 1024px) {
            transition: 0.6s;
        }
    }
`;

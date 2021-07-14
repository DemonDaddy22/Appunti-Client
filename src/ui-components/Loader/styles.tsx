/* eslint-disable indent */
import styled, { keyframes } from 'styled-components';

export const LoaderAnimation = keyframes`
    0% {
        border-radius: 50%;
        transform: rotate(0deg) scale(1);
    }
    25% {
        border-radius: 50%;
        transform: rotate(0deg) scale(2);
    }
    50% {
        border-radius: 10%;
        transform: rotate(270deg) scale(2);
    }
    75% {
        border-radius: 10%;
        transform: rotate(270deg) scale(1);
    }
    100% {
        border-radius: 50%;
        transform: rotate(0deg) scale(1);
    }
`;

export const StyledLoader = styled.div`
    background-color: ${({ color }: ILoader) => color};
    border-radius: 50%;
    height: ${({ size }: ILoader) =>
        typeof size === 'number' ? `${size - 12}px` : size};
    width: ${({ size }: ILoader) =>
        typeof size === 'number' ? `${size - 12}px` : size};
    transition: backgroundColor 0.25s;
    animation: ${LoaderAnimation} 2s ease-in-out infinite;

    @media (min-width: 1024) {
        height: ${({ size }: ILoader) =>
            typeof size === 'number' ? `${size}px` : size};
        width: ${({ size }: ILoader) =>
            typeof size === 'number' ? `${size}px` : size};
    }
`;

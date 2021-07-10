/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { WHITE_TRANSPARENT_90, THEME_PRIMARY_ACCENT3, GREY_50 } from '../../resources/colors';
import { isColorDark } from '../../utils';

interface IProps extends IPageButton, IColors {};

export const StyledPageButtonContainer = styled.div`
    border: 1px solid ${({ color, disabled }: IProps) => disabled ? GREY_50 : color};
    border-radius: 4px;
    display: flex;
    transition: border 0.25s;
`;

export const StyledPageButton = styled.button`
    background-color: ${({ active, color }: IProps) => active ? color : 'transparent'};
    border: none;
    border-right: 1px solid ${({ color, disabled }: IProps) => disabled ? GREY_50 : color};
    color: ${({ active, color }: IProps) => active ? (isColorDark(color) ? WHITE_TRANSPARENT_90 : THEME_PRIMARY_ACCENT3) : color};
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 500;
    outline: none;
    padding: 0.6rem 0.85rem;
    transition: background-color 0.25s, border 0.25s, color 0.25s;

    &:last-child {
        border-right: none;
    }

    &:hover {
        background-color: ${({ color }: IProps) => color};
        color: ${({ color }: IProps) => isColorDark(color) ? WHITE_TRANSPARENT_90 : THEME_PRIMARY_ACCENT3};
        outline: none;
    }

    &:disabled {
        background-color: transparent !important;
        color: ${GREY_50} !important;
        cursor: auto !important;
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

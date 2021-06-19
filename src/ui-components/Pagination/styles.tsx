/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { WHITE_TRANSPARENT_90, THEME_PRIMARY_ACCENT3 } from '../../resources/colors';
import { isColorDark } from '../../utils';

interface IProps extends IPageButton, IColors {};

export const StyledPageButtonContainer = styled.div`
    border: 1px solid ${(props: IColor) => props.color};
    border-radius: 4px;
    display: flex;
`;

export const StyledPageButton = styled.button`
    background-color: ${(props: IProps) => props.active ? props.color : 'transparent'};
    border: none;
    border-right: 1px solid ${(props: IProps) => props.color};
    color: ${(props: IProps) => props.active ? (isColorDark(props.color) ? WHITE_TRANSPARENT_90 : THEME_PRIMARY_ACCENT3) : props.color};
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
        background-color: ${(props: IProps) => props.color};
        color: ${(props: IProps) => isColorDark(props.color) ? WHITE_TRANSPARENT_90 : THEME_PRIMARY_ACCENT3};
        outline: none;
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

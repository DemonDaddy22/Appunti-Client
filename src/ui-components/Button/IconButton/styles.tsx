/* eslint-disable indent */
import styled from 'styled-components';
import { isHexColor, rgbToHex } from '../../../utils';

interface IProps extends IIconButton, IBackgroundColor {}

const StyledIconButton = styled.button`
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: ${({ showRipple }: IProps) => (showRipple ? '50%' : 0)};
    cursor: pointer;
    display: flex;
    justify-content: center;
    opacity: 0.8;
    outline: none;
    padding: ${({ showRipple }: IProps) => (showRipple ? '0.5rem' : 0)};
    transition: background-color 0.25s, opacity 0.25s;

    &:hover {
        background-color: ${({ showRipple, backgroundColor }: IProps) =>
            showRipple
                ? isHexColor(backgroundColor || '')
                    ? `${backgroundColor}27`
                    : `${rgbToHex(backgroundColor || '')}27`
                : 'transparent'};
        opacity: 1;
    }
`;

export default StyledIconButton;

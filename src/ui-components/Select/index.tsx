/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { isEmptyList, isHexColor, rgbToHex } from '../../utils';
import Downshift from 'downshift';
import ChevronDown from '../../assets/icons/ChevronDown';
import { ThemeContext } from '../../context/ThemeContext';
import { THEME_PRIMARY_ACCENT3, WHITE } from '../../resources/colors';

const StyledInputContainer = styled.div`
    border: 1px solid;
    border-color: ${(props: IColors) => {
        const borderColor = props.borderColor || '';
        return isHexColor(borderColor) ? borderColor : rgbToHex(borderColor);
    }}9F;
    border-radius: 4px;
    display: inline-flex;
    font-family: inherit;
    margin-top: 4px;
    padding: 0;
    position: relative;
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

const StyledInputButton = styled.button`
    align-items: center;
    background-color: ${({ backgroundColor }: IBackgroundColor) => backgroundColor};
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

const StyledMenu = styled.ul`
    border: ${({ isOpen }: ISelectMenu) => isOpen ? '1px solid' : 'none'};
    border-color: ${({ borderColor }: ISelectMenu) => borderColor};
    border-radius: 4px;
    left: 50%;
    list-style: none;
    margin: ${({ isOpen }: ISelectMenu) => isOpen ? '0.5rem auto 0' : 0};
    min-width: 20%;
    padding: 0;
    position: absolute;
    transform: translateX(-50%);
    transition: border 0.25s;
`;

const StyledMenuItem = styled.li`
    background-color: ${({ backgroundColor, isHighlighted }: ISelectItem) => `${backgroundColor}${isHighlighted ? 'AF' : ''}`};
    color: ${({ color, selectedColor, isSelected }: ISelectItem) => isSelected ? selectedColor : color};
    cursor: pointer;
    font-weight: ${({ isSelected }: ISelectItem) => isSelected ? 'bold' : 'inherit'};
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

// TODO - style the elements
// TODO - when no matching element is found, show the text 'Search for something else'
const Select: React.FC<ISelect> = (props) => {
    const { theme, getThemedValue } = useContext(ThemeContext);
    
    const {
        name,
        options: items,
        containerStyle,
        selectStyle,
        optionStyle,
        color = theme.themeSecondary,
        borderColor = theme.borderColor,
        onOptionChange,
        onInputChange,
    } = props;

    return !isEmptyList(items) ? (
        <Downshift
            onChange={(selection) => onOptionChange(selection)}
            itemToString={(item) => (item ? item.value : '')}
        >
            {({
                getInputProps,
                getItemProps,
                getMenuProps,
                getToggleButtonProps,
                isOpen,
                inputValue,
                highlightedIndex,
                selectedItem,
                getRootProps,
            }) => {
                return (
                    <div>
                        <StyledInputContainer color={color} borderColor={borderColor}
                            {...getRootProps({ refKey: 'ref' }, { suppressRefError: true })}
                        >
                            <input {...getInputProps({ onChange: (e) => onInputChange(e.target.value) })} />
                            <StyledInputButton backgroundColor={theme.textOpposite} {...getToggleButtonProps()}>
                                <ChevronDown color={theme.text} />
                            </StyledInputButton>
                        </StyledInputContainer>
                        <StyledMenu isOpen={isOpen} borderColor={theme.borderColor} {...getMenuProps()}>
                            {isOpen
                                ? items
                                    .filter(
                                        (item) =>
                                            !inputValue ||
                                          item.value.includes(inputValue)
                                    )
                                    .map((item, index) => (
                                        <StyledMenuItem
                                            isHighlighted={highlightedIndex === index}
                                            isSelected={selectedItem === item}
                                            backgroundColor={getThemedValue(WHITE, THEME_PRIMARY_ACCENT3)}
                                            color={theme.text}
                                            selectedColor={theme.themeSecondary}
                                            {...getItemProps({
                                                key: item.value,
                                                index,
                                                item,
                                                style: {
                                                    fontWeight:
                                                      selectedItem === item
                                                          ? 'bold'
                                                          : 'normal',
                                                },
                                            })}
                                        >
                                            {item.value}
                                        </StyledMenuItem>
                                    ))
                                : null}
                        </StyledMenu>
                    </div>
                );}}
        </Downshift>
    ) : null;
};

export default Select;

/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { isEmptyList, isHexColor, rgbToHex } from '../../utils';
import Downshift from 'downshift';
import ChevronDown from '../../assets/icons/ChevronDown';
import { ThemeContext } from '../../context/ThemeContext';

// TODO - create custom Select with *DOWNSHIFT*
// TODO - use chevron icon in button
// TODO - try initial open

const StyledInputContainer = styled.div`
    border: 1px solid;
    border-color: ${(props: IColors) => {
        const borderColor = props.borderColor || '';
        return isHexColor(borderColor) ? borderColor : rgbToHex(borderColor);
    }}9F;
    border-radius: 4px;
    display: inline-flex;
    margin-top: 4px;
    padding: 0;
    transition: border 0.25s;

    &:hover {
        border-color: ${(props: IColors) => props.borderColor};
    }

    & input {
        background-color: transparent;
        border: none;
        border-top-left-radius: inherit;
        border-bottom-left-radius: inherit;
        color: ${(props: IColors) => props.color};
        font-size: 1.05rem;
        outline: none;
        padding: 0.8rem 0.6rem;

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
    background-color: ${(props: IBackgroundColor) => props.backgroundColor};
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

// TODO - remove translations and border when isOpen -> false
const StyledMenu = styled.ul`
    border: 1px solid teal;
    border-radius: 4px;
    left: 50%;
    list-style: none;
    margin: 0.25rem auto 0;
    min-width: 20%;
    padding: 0;
    position: absolute;
    transform: translateX(-50%);
`;

const StyledMenuItem = styled.li`
    padding: 0.5rem 0.75rem;
    text-align: start;

    &:first-of-type {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }
    
    &:last-of-type {
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
    }
`;

const StyledLabel = styled.label`
    color: ${(props: IColor) => props.color};
    font-size: 0.8rem;
    letter-spacing: -0.5px;
`;

const StyledSelect = styled.select`
    appearance: none;
    background-color: transparent;
    border: 1px solid ${(props: IColors) => props.borderColor};
    border-radius: 4px;
    color: ${(props: IColors) => props.color};
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    min-width: 5rem;
    max-width: 7.5rem;
    outline: none;
    padding: 0.35rem 0.5rem;
    width: 100%;

    @media (min-width: 1024px) {
        padding: 0.4rem 0.55rem;
    }

    @media (min-width: 1500px) {
        padding: 0.5rem 0.6rem;
    }
`;

// TODO - style the elements
// TODO - when no matching element is found, show the text 'Search for something else'
const Select: React.FC<ISelect> = (props) => {
    const {
        name,
        options: items,
        containerStyle,
        selectStyle,
        optionStyle,
        onOptionChange,
        onInputChange,
    } = props;

    const { theme } = useContext(ThemeContext);

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
                        <StyledInputContainer color={theme.themeSecondary} borderColor={theme.textObscure}
                            {...getRootProps({ refKey: 'ref' }, { suppressRefError: true })}
                        >
                            <input {...getInputProps({ onChange: (e) => onInputChange(e.target.value) })} />
                            <StyledInputButton backgroundColor={theme.textOpposite} {...getToggleButtonProps()}>
                                <ChevronDown color={theme.text} />
                            </StyledInputButton>
                        </StyledInputContainer>
                        <StyledMenu {...getMenuProps()}>
                            {isOpen
                                ? items
                                    .filter(
                                        (item) =>
                                            !inputValue ||
                                          item.value.includes(inputValue)
                                    )
                                    .map((item, index) => (
                                        <StyledMenuItem
                                            {...getItemProps({
                                                key: item.value,
                                                index,
                                                item,
                                                style: {
                                                    backgroundColor:
                                                      highlightedIndex === index
                                                          ? 'lightgray'
                                                          : 'white',
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

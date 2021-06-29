/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import { GREY_80, THEME_PRIMARY_ACCENT2 } from '../../resources/colors';
import { isEmptyList, isEmptyString } from '../../utils';
import Downshift from 'downshift';

// TODO - create custom Select with *DOWNSHIFT*

const StyledInputContainer = styled.div`
    border: 1px solid violet;
    display: inline-flex;
    padding: 0;

    & input {
        border: none;
        outline: none;
        background-color: teal;
    }

    & button {
        align-items: center;
        background-color: transparent;
        border: none;
        display: inline-flex;
        justify-content: center;
        outline: none;
    }
`;

const StyledSelectContainer = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
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
                        <StyledInputContainer
                            {...getRootProps({ refKey: 'ref' }, { suppressRefError: true })}
                        >
                            <input {...getInputProps({ onChange: (e) => onInputChange(e.target.value) })} />
                            <button {...getToggleButtonProps()}>
                            &#8964;
                            </button>
                        </StyledInputContainer>
                        <ul style={{ position: 'absolute' }} {...getMenuProps()}>
                            {isOpen
                                ? items
                                    .filter(
                                        (item) =>
                                            !inputValue ||
                                          item.value.includes(inputValue)
                                    )
                                    .map((item, index) => (
                                        <li
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
                                        </li>
                                    ))
                                : null}
                        </ul>
                    </div>
                );}}
        </Downshift>
    ) : null;
};

export default Select;

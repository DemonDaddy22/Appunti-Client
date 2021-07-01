/* eslint-disable prettier/prettier */

import React, { useContext } from 'react';
import { isEmptyList } from '../../utils';
import Downshift from 'downshift';
import ChevronDown from '../../assets/icons/ChevronDown';
import { ThemeContext } from '../../context/ThemeContext';
import { THEME_PRIMARY_ACCENT3, WHITE } from '../../resources/colors';
import { StyledInputContainer, StyledInputButton, StyledMenu, StyledMenuItem } from './styles';

// TODO - when no matching element is found, show the text 'Search for something else'
// TODO - add border effects similar to input component
const Select: React.FC<ISelect> = (props) => {
    const { theme, getThemedValue } = useContext(ThemeContext);

    const {
        placeholder = '',
        options: items,
        containerStyle,
        inputContainerStyle,
        selectMenuStyle,
        selectItemStyle,
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
                    <div style={containerStyle}>
                        <StyledInputContainer
                            color={color}
                            borderColor={borderColor}
                            {...getRootProps(
                                { refKey: 'ref' },
                                { suppressRefError: true }
                            )}
                        >
                            <input
                                {...getInputProps({
                                    placeholder,
                                    style: inputContainerStyle,
                                    onChange: (e) =>
                                        onInputChange(e.target.value),
                                })}
                            />
                            <StyledInputButton
                                backgroundColor={theme.textOpposite}
                                {...getToggleButtonProps()}
                            >
                                <ChevronDown color={theme.text} />
                            </StyledInputButton>
                        </StyledInputContainer>
                        <StyledMenu
                            isOpen={isOpen}
                            borderColor={theme.borderColor}
                            {...getMenuProps({ style: selectMenuStyle })}
                        >
                            {isOpen
                                ? items
                                    .filter(
                                        (item) =>
                                            !inputValue ||
                                              item.value.includes(inputValue)
                                    )
                                    .map((item, index: number) => (
                                        <StyledMenuItem
                                            isHighlighted={highlightedIndex === index}
                                            isSelected={selectedItem === item}
                                            backgroundColor={getThemedValue(WHITE, THEME_PRIMARY_ACCENT3)}
                                            color={theme.text}
                                            selectedColor={theme.themeSecondary}
                                            {...getItemProps({
                                                key: item.value, index, item, style: selectItemStyle
                                            })}
                                        >
                                            {item.value}
                                        </StyledMenuItem>
                                    ))
                                : null}
                        </StyledMenu>
                    </div>
                );
            }}
        </Downshift>
    ) : null;
};

export default Select;

/* eslint-disable prettier/prettier */

import React, { useCallback, useContext } from 'react';
import { isEmptyList } from '../../utils';
import Downshift from 'downshift';
import ChevronDown from '../../assets/icons/ChevronDown';
import { ThemeContext } from '../../context/ThemeContext';
import { THEME_PRIMARY_ACCENT3, WHITE } from '../../resources/colors';
import { StyledInputContainer, StyledInputButton, StyledMenu, StyledMenuItem } from './styles';

const Select: React.FC<ISelect> = (props) => {
    const { theme, getThemedValue } = useContext(ThemeContext);

    const {
        placeholder = '',
        value,
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

    const isItemPresent = useCallback((inputValue: string | null) => (
        items?.length && items.some((item) => item.value.includes(inputValue))
    ), [items]);

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
                                    value,
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
                                ? isItemPresent(inputValue)
                                    ? items.filter(
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
                                    : <StyledMenuItem
                                        backgroundColor={getThemedValue(WHITE, THEME_PRIMARY_ACCENT3)}
                                        color={theme.textObscure}
                                        {...getItemProps({
                                            key: 'no-item-present', item: null, style: selectItemStyle
                                        })}
                                    >
                                        Try searching for something else...
                                    </StyledMenuItem>
                                : null}
                        </StyledMenu>
                    </div>
                );
            }}
        </Downshift>
    ) : null;
};

export default Select;

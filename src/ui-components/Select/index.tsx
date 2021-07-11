/* eslint-disable prettier/prettier */

import React, { useCallback, useContext } from 'react';
import { isEmptyList, isEmptyObject, isEmptyString } from '../../utils';
import Downshift from 'downshift';
import ChevronDown from '../../assets/icons/ChevronDown';
import { ThemeContext } from '../../context/ThemeContext';
import { THEME_PRIMARY_ACCENT3, WHITE } from '../../resources/colors';
import { StyledInputContainer, StyledInputButton, StyledMenu, StyledMenuItem, StyledSelectContainer } from './styles';

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
        !isEmptyList(items) && items.some((item) => item.label.includes(inputValue || ''))
    ), [items]);

    const handleInputBlur = useCallback((selectedItem: ISelectOption, inputValue: string | null) => {
        if (isEmptyString(inputValue || '') && !isEmptyObject(selectedItem)) {
            onInputChange(selectedItem.label);
        }
    }, [onInputChange]);

    return !isEmptyList(items) ? (
        <Downshift
            onChange={(selection) => onOptionChange(selection)}
            itemToString={(item) => (item ? item.label : '')}
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
                    <StyledSelectContainer style={containerStyle}>
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
                                    onBlur: (e) =>
                                        handleInputBlur(selectedItem, e.target.value),
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
                                              item.label.includes(inputValue)
                                    )
                                        .map((item, index: number) => (
                                            <StyledMenuItem
                                                isHighlighted={highlightedIndex === index}
                                                isSelected={selectedItem === item}
                                                backgroundColor={getThemedValue(WHITE, THEME_PRIMARY_ACCENT3)}
                                                color={theme.text}
                                                selectedColor={theme.themeSecondary}
                                                {...getItemProps({
                                                    key: item.label, index, item, style: selectItemStyle
                                                })}
                                            >
                                                {item.label}
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
                    </StyledSelectContainer>
                );
            }}
        </Downshift>
    ) : null;
};

export default Select;

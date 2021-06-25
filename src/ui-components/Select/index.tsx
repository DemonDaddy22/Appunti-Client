import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';
import { GREY_80, THEME_PRIMARY_ACCENT2 } from '../../resources/colors';
import { isEmptyList, isEmptyString } from '../../utils';

// TODO - create custom Select with *DOWNSHIFT*

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

const Select: React.FC<ISelect> = (props) => {
    const {
        name,
        label,
        labelId,
        options,
        containerStyle,
        labelStyle,
        selectStyle,
        optionStyle,
    } = props;

    const { getThemedValue } = useContext(ThemeContext);

    return !isEmptyList(options) ? (
        <StyledSelectContainer style={containerStyle}>
            {!isEmptyString(label) && !isEmptyString(labelId) && (
                <StyledLabel
                    color={getThemedValue(THEME_PRIMARY_ACCENT2, GREY_80)}
                    htmlFor={labelId}
                    style={labelStyle}
                >
                    {label}
                </StyledLabel>
            )}
            <StyledSelect
                borderColor={getThemedValue(THEME_PRIMARY_ACCENT2, GREY_80)}
                color={getThemedValue(THEME_PRIMARY_ACCENT2, GREY_80)}
                name={name}
                id={labelId || ''}
                style={selectStyle}
            >
                {options.map((option: ISelectOption, i: number) => (
                    <option
                        key={`${name}-option-${i}`}
                        value={option?.value}
                        style={optionStyle}
                    >
                        {option?.label}
                    </option>
                ))}
            </StyledSelect>
        </StyledSelectContainer>
    ) : null;
};

export default Select;

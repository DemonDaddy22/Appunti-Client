import React from 'react';
import styled from 'styled-components';
import { isEmptyList, isEmptyString } from '../../utils';

const Select: React.FC<ISelect> = (props) => {
    const { name, label, labelId, options } = props;

    return !isEmptyList(options) ? (
        <div>
            {!isEmptyString(label) && !isEmptyString(labelId) && (
                <label htmlFor={labelId}>{label}</label>
            )}
            <select name={name} id={labelId || ''}>
                {options.map((option: any, i: number) => (
                    <option key={`${name}-option-${i}`} value={option?.value}>
                        {option?.label}
                    </option>
                ))}
            </select>
        </div>
    ) : null;
};

export default Select;

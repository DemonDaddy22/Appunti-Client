import React, { useCallback } from 'react';
import classes from './styles.module.scss';

const Input: React.FC<IInput> = props => {
    const { value, name, type, onChange, style } = props;

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value),
        [onChange]
    );
    
    return <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className={classes.input}
        style={style}
    >
    </input>;
};

export default Input;

Input.defaultProps = {
    type: 'text',
    style: {}
};
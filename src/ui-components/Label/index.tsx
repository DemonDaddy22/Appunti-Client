import React from 'react';
import { StyledLabel } from './styles';

const Label = (props: any) => {
    const { label, style } = props;

    return <StyledLabel style={style}>{label}</StyledLabel>;
};

export default Label;

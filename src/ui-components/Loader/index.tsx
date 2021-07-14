import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import {
    THEME_PRIMARY_ACCENT2,
    WHITE_TRANSPARENT_90,
} from '../../resources/colors';
import { StyledLoader } from './styles';

const Loader: React.FC<ILoader> = (props) => {
    const { getThemedValue } = useContext(ThemeContext);

    const {
        color = getThemedValue(THEME_PRIMARY_ACCENT2, WHITE_TRANSPARENT_90),
        size,
        style,
    } = props;

    return <StyledLoader size={size} color={color} style={style} />;
};

export default Loader;

Loader.defaultProps = {
    size: 48,
    style: {},
};

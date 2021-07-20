import React, { useContext } from 'react';
import Dark from '../../assets/icons/Dark';
import Light from '../../assets/icons/Light';
import { ThemeContext } from '../../context/ThemeContext';
import IconButton from '../../ui-components/Button/IconButton';

const ThemeToggler: React.FC<IStyle> = ({ style }) => {
    const { toggleTheme, theme, isLightTheme } = useContext(ThemeContext);

    return (
        <IconButton onClick={toggleTheme} style={style}>
            {isLightTheme ? (
                <Dark color={theme.textPrimary} />
            ) : (
                <Light color={theme.textPrimary} />
            )}
        </IconButton>
    );
};

export default ThemeToggler;

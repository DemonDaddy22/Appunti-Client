import React, { useCallback, useState } from 'react';
import { DARK_THEME, LIGHT_THEME } from '../resources/theme';

const ThemeContextValue: IThemeContextValue = {
    isLightTheme: false,
    theme: LIGHT_THEME,
    toggleTheme: () => {},
    // eslint-disable-next-line no-unused-vars
    getThemedValue: (_lightValue: string, _darkValue: string): string => _lightValue
};

export const ThemeContext = React.createContext(ThemeContextValue);

const ThemeContextProvider: React.FC<IContext> = props => {
    const { children } = props;

    const [isLightTheme, setIsLightTheme] = useState<boolean>(true);
    const [theme, setTheme] = useState<ITheme>(LIGHT_THEME);

    const toggleTheme = useCallback(() => {
        setIsLightTheme(prevIsLightTheme => !prevIsLightTheme);
        setTheme(prevTheme => prevTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);
    }, [isLightTheme]);

    const getThemedValue = useCallback(
        (lightValue: string, darkValue: string) => (isLightTheme ? lightValue : darkValue),
        [isLightTheme]
    );

    return (
        <ThemeContext.Provider value={{
            isLightTheme, theme, toggleTheme, getThemedValue 
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
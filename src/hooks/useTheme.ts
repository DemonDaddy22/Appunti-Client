import { THEME } from '../resources/constants';

/**
 *
 * Hook to get and set theme string into browser's localStorage
 * @returns Array of two functions
 *
 * First function - gets theme string
 *
 * Second function - sets theme string
 *
 */
const useTheme = (): [() => string, (theme: 'light' | 'dark') => void] => {
    const getThemeFromStorageIfPresent = () => {
        const swooshTheme =
            localStorage.getItem('swooshTheme') || JSON.stringify(THEME.LIGHT);
        return JSON.parse(swooshTheme);
    };

    const setThemeInStorage = (theme: 'light' | 'dark') => {
        localStorage.setItem('swooshTheme', JSON.stringify(theme));
        document.documentElement.setAttribute('theme-mode', theme);
    };

    return [getThemeFromStorageIfPresent, setThemeInStorage];
};

export default useTheme;

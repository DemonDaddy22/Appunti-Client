/* eslint-disable no-unused-vars */

interface IContext {
    /**
     * 
     * @interface IContext
     * @field `children` - specifies valid React node element(s)
     * 
     */
    children: React.ReactNode;
}

interface IThemeContextValue {
    /**
     * 
     * @interface IThemeContextValue
     * @field `isLightTheme` - specifies whether light theme is active or not
     * 
     */
    isLightTheme: boolean;

    /**
     * 
     * @interface IThemeContextValue
     * @field `theme` - specifies `ITheme` object
     * 
     */
    theme: ITheme;

    /**
     * 
     * @interface IThemeContextValue
     * @field `toggleTheme` - function to toggle app theme
     * @function
     * @returns `void`
     * 
     */
    toggleTheme: () => void;

    /**
     * 
     * @interface IThemeContextValue
     * @field `getThemedValue` - function which returns a value based on current theme
     * @function
     * @param {string} lightValue - specifies value to be used for light theme
     * @param {string} darkValue - specifies value to be used for dark theme
     * @returns `string`
     * 
     */
    getThemedValue: (lightValue: string, darkValue: string) => string;
}
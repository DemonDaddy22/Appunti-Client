/* eslint-disable no-unused-vars */

interface ITheme {
    /**
     * @interface ITheme
     * @field {string} background - specifies background accent color
     */
    background: string;

    /**
     * @interface ITheme
     * @field {string} text - specifies text accent color
     */
    text: string;
    
    /**
     * @interface ITheme
     * @field {string} textIntense - specifies more intense text accent color
     */
    textIntense: string;

    /**
     * @interface ITheme
     * @field {string} textObscure - specifies lighter text accent color
     */
    textObscure: string;

    /**
     * @interface ITheme
     * @field {string} textOpposite - specifies contrasting text accent color
     */
    textOpposite: string;

    /**
     * @interface ITheme
     * @field {string} themePrimary - specifies theme primary color
     */
    themePrimary: string;

    /**
     * @interface ITheme
     * @field {string} themeSecondary - specifies theme secondary color
     */
    themeSecondary: string;
}

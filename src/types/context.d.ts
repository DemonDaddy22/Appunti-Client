/* eslint-disable no-unused-vars */

interface IContext {
    /**
     *
     * @field `children` - specifies valid React node element(s)
     *
     */
    children: React.ReactNode;
}

interface IThemeContextValue {
    /**
     *
     * @field `isLightTheme` - specifies whether light theme is active or not
     *
     */
    isLightTheme: boolean;

    /**
     *
     * @field `theme` - specifies `ITheme` object
     *
     */
    theme: ITheme;

    /**
     *
     * @function toggleTheme - function to toggle app theme
     * @returns `void`
     *
     */
    toggleTheme: (...args: any[]) => void;

    /**
     *
     * @function getThemedValue - function which returns a value based on current theme
     * @param {string} lightValue - specifies value to be used for light theme
     * @param {string} darkValue - specifies value to be used for dark theme
     * @returns `string`
     *
     */
    getThemedValue: (lightValue: string, darkValue: string) => string;
}

interface IToastContextValue {
    /**
     *
     * @field `toasts` - specifies the list of toasts to be rendered
     *
     */
    toasts: Array<IToastValue>;

    /**
     *
     * @function addToast - function to add new toast to toasts list
     * @returns `void`
     *
     */
    addToast: (...args: any[]) => void;

    /**
     *
     * @function deleteToast - function to delete toast from toasts list
     * @returns `void`
     *
     */
    deleteToast: (...args: any[]) => void;
}

interface IToastValue {
    /**
     *
     * @field `id` - specifies unique id of toast
     *
     */
    id: number;

    /**
     *
     * @field `toast` - specifies necessary data for toast
     *
     */
    toast: IToast;
}

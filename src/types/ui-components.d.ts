/* eslint-disable no-unused-vars */

interface IColor {
    /**
     *
     * @field `color` - specifies text color
     *
     */
    color?: string;
}

interface IBorderColor {
    /**
     *
     * @field `borderColor` - specifies border color
     *
     */
    borderColor?: string;
}

interface IBackgroundColor {
    /**
     *
     * @field `backgroundColor` - specifies background color
     *
     */
    backgroundColor?: string;
}

interface IColors {
    /**
     *
     * @field `color` - specifies text color of the content
     *
     */
    color?: string;

    /**
     *
     * @field `borderColor` - specifies border color of the button
     *
     */
    borderColor?: string;

    /**
     *
     * @field `backgroundColor` - specifies background color of the button
     *
     */
    backgroundColor?: string;
}

interface IInput extends IColor, IBorderColor {
    /**
     *
     * @field `value` - specifies value for input field
     *
     */
    value: string;

    /**
     *
     * @field `name` - specifies name for input field
     *
     */
    name: string;

    /**
     *
     * @function onChange - function to trigger when input is changed
     * @returns `void`
     */
    onChange: (value: any) => void;

    /**
     *
     * @field `type` - specifies type of input value
     *
     */
    type?:
        | 'text'
        | 'number'
        | 'numeric'
        | 'email'
        | 'tel'
        | 'password'
        | 'tel'
        | 'url';

    /**
     *
     * @field `style` - specifies styles to override the default styles
     *
     */
    style?: React.CSSProperties;
}

interface IButton extends IColors {
    /**
     *
     * @field `children` - specifies valid React node element(s)
     *
     */
    children: React.ReactNode;

    /**
     *
     * @function onClick - function to trigger when the button is clicked
     * @returns `void`
     *
     */
    onClick: () => void;

    /**
     *
     * @field `style` - specifies styles to override the default styles
     *
     */
    style?: React.CSSProperties;
}

interface IButtonOutlined extends IColor {
    /**
     *
     * @field `children` - specifies valid React node element(s)
     *
     */
    children: React.ReactNode;

    /**
     *
     * @function onClick - function to trigger when the button is clicked
     * @returns `void`
     *
     */
    onClick: () => void;

    /**
     *
     * @field `style` - specifies styles to override the default styles
     *
     */
    style?: React.CSSProperties;
}

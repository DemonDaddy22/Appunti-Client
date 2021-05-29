/* eslint-disable no-unused-vars */

interface IInput {

    /**
     * 
     * @interface IInput
     * @field `value` - specifies value for input field
     * 
     */
    value: string;
    
    /**
     * 
     * @interface IInput
     * @field `name` - specifies name for input field
     * 
     */
    name: string;

    /**
     * 
     * @interface IInput
     * @function onChange - function to trigger when input is changed
     * @returns `void`
     */
    onChange: (value: any) => void;

    /**
     * 
     * @interface IInput
     * @field `type` - specifies type of input value
     *
     */
    type?: 'text' | 'number' | 'numeric' | 'email' | 'tel' | 'password' | 'tel' | 'url';

    /**
     * 
     * @interface IInput
     * @field `style` - specifies styles to override the default styles
     * 
     */
    style?: React.CSSProperties;
}
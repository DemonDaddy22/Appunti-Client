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

interface IInput extends IColor, IBorderColor, IStyle {
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
     * @field `placeholder` - specifies placeholder for input field
     *
     */
    placeholder: string;

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
     * @field `containerStyle` - specifies styles to override the default input container styles
     *
     */
    containerStyle?: React.CSSProperties;
}

interface IButton extends IColors, IStyle {
    /**
     *
     * @field `disabled` - specifies whether button should be disabled
     *
     */
    disabled?: boolean | undefined;

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
}

interface IButtonOutlined extends IColor, IStyle {
    /**
     *
     * @field `disabled` - specifies whether button should be disabled
     *
     */
    disabled?: boolean | undefined;

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
}

interface IPagination {
    /**
     *
     * @field `pageRange` - specifies size of pagination bar
     *
     */
    pageRange: number;

    /**
     *
     * @field `pageIndex` - specifies current page index
     *
     */
    pageIndex: number;

    /**
     *
     * @field `countPerPage` - specifies number of entries per page
     *
     */
    countPerPage: number;

    /**
     *
     * @field `totalCount` - specifies total number of entries
     *
     */
    totalCount: number;

    /**
     *
     * @function handlePageChange - function to trigger on page change
     * @param {number} page - specifies updated page number
     * @returns `void`
     *
     */
    handlePageChange: (page: number) => void;

    /**
     *
     * @field `style` - specifies styles to override default container styles
     *
     */
    style?: React.CSSProperties;

    /**
     *
     * @field `buttonContainerStyle` - specifies styles to override default button container styles
     *
     */
    buttonContainerStyle?: React.CSSProperties;

    /**
     *
     * @field `buttonStyle` - specifies styles to override default button styles
     *
     */
    buttonStyle?: React.CSSProperties;
}

interface IPageButton {
    /**
     *
     * @field `active` - specifies whether button is active or not
     *
     */
    active: boolean;
}

interface ISelectOption {
    /**
     *
     * @field `value` - specifies select option value
     *
     */
    value: any;
}

interface ISelect {
    /**
     *
     * @field `name` - specifies name for select component
     *
     */
    name: string;

    /**
     *
     * @field `options` - specifies options for select component
     *
     */
    options: Array<ISelectOption>;

    /**
     *
     * @field `containerStyle` - specifies styles to override default container styles
     *
     */
    containerStyle?: React.CSSProperties;

    /**
     *
     * @field `selectStyle` - specifies styles to override default select styles
     *
     */
    selectStyle?: React.CSSProperties;

    /**
     *
     * @field `optionStyle` - specifies styles to override default option styles
     *
     */
    optionStyle?: React.CSSProperties;

    /**
     *
     * @function onOptionChange - function to trigger on option change
     * @param {ISelectOption} option - specifies selected option
     * @returns `void`
     *
     */
    onOptionChange: (option: ISelectOption) => void;

    /**
     *
     * @function onInputChange - function to trigger on input change
     * @param {string} value - specifies input value
     * @returns `void`
     *
     */
    onInputChange: (value: string) => void;
}

interface ILabel extends IColor {
    /**
     *
     * @field `label` - specifies the label content
     *
     */
    label: string;

    /**
     *
     * @field `style` - specifies styles to override default label styles
     *
     */
    style?: React.CSSProperties;
}

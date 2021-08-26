/* eslint-disable no-unused-vars */

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
    onClick: (...args) => void;
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
    onClick: (...args) => void;
}

interface IPagination extends IStyle {
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
     * @field `disabled` - specifies whether pagination buttons should be disabled
     *
     */
    disabled?: boolean;

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
    active?: boolean;

    /**
     *
     * @field `disabled` - specifies whether button is disabled or not
     *
     */
    disabled?: boolean;
}

interface ISelectOption {
    /**
     *
     * @field `label` - specifies the label string to be displayed as option
     *
     */
    label: string;

    /**
     *
     * @field `value` - specifies the actual value to be used for further processing
     *
     */
    value: any;
}

interface ISelect extends IColors {
    /**
     *
     * @field `placeholder` - specifies placeholder for input field
     *
     */
    placeholder?: string;

    /**
     *
     * @field `value` - specifies value for input field
     *
     */
    value: string;

    /**
     *
     * @field `options` - specifies options for select component
     *
     */
    options: Array<ISelectOption>;

    /**
     *
     * @field `containerStyle` - specifies container styles
     *
     */
    containerStyle?: React.CSSProperties;

    /**
     *
     * @field `inputContainerStyle` - specifies styles to override default input container styles
     *
     */
    inputContainerStyle?: React.CSSProperties;

    /**
     *
     * @field `selectMenuStyle` - specifies styles to override default select menu styles
     *
     */
    selectMenuStyle?: React.CSSProperties;

    /**
     *
     * @field `selectItemStyle` - specifies styles to override default select item styles
     *
     */
    selectItemStyle?: React.CSSProperties;

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

interface ISelectMenu extends IBorderColor {
    /**
     *
     * @field `isOpen` - specifies whether the menu is open
     *
     */
    isOpen: boolean;
}

interface ISelectItem extends IColors {
    /**
     *
     * @field `isHighlighted` - specifies whether the item is hovered
     *
     */
    isHighlighted: boolean;

    /**
     *
     * @field `isSelected` - specifies whether the item is selected
     *
     */
    isSelected: boolean;

    /**
     *
     * @field `selectedColor` - specifies text color for selected item
     *
     */
    selectedColor: string;
}

interface ILabel extends IColor, IStyle {
    /**
     *
     * @field `label` - specifies the label content
     *
     */
    label: string;
}

interface ILoader extends IColor, IStyle {
    /**
     *
     * @field `size` - specifies size of the loader
     *
     */
    size?: number | string;
}

interface IIconButton extends IStyle {
    /**
     *
     * @field `disabled` - specifies whether icon button should be disabled
     *
     */
    disabled?: boolean;

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
    onClick: (...args) => void;

    /**
     *
     * @field `showRipple` - specifies whether icon button should have background ripple
     *
     */
    showRipple?: boolean;

    /**
     *
     * @field `transform` - specifies transform style for hover state
     *
     */
    transform?: string | null;
}

interface IDivider extends IStyle {
    /**
     *
     * @field `numDashes` - specifies the number of dash pattern
     * @default 4
     *
     */
    numOfDashes?: number;

    /**
     *
     * @field `hideDivider` - specifies whether to make the divider transparent
     *
     */
    hideDivider?: boolean;

    /**
     *
     * @field `dashStyle` - specifies styles to override default dash style
     *
     */
    dashStyle?: React.CSSProperties;

    /**
     *
     * @field `className` - specifies CSS class(es) to override default styles
     *
     */
    className?: string;
}

interface IModal {
    /**
     *
     * @field `open` - specifies whether modal is open
     *
     */
    open: boolean;

    /**
     *
     * @field `closeOnBackdropClick` - specifies whether to close the modal on clicking backdrop
     *
     */
    closeOnBackdropClick?: boolean;

    /**
     *
     * @function onClose - function to trigger when the modal is to be closed
     * @returns `void`
     *
     */
    onClose: (...args) => void;

    /**
     *
     * @field `header` - specifies modal header
     */
    header: string;

    /**
     *
     * @field `children` - specifies the content of modal
     *
     */
    children: React.ReactNode;

    /**
     *
     * @field `backdropStyle` - specifies styles to override default backdrop style
     *
     */
    backdropStyle?: React.CSSProperties;

    /**
     *
     * @field `containerStyle` - specifies styles to override default modal container style
     *
     */
    containerStyle?: React.CSSProperties;

    /**
     *
     * @field `contentStyle` - specifies styles to override default content wrapper style
     *
     */
    contentStyle?: React.CSSProperties;

    /**
     *
     * @field `headerStyle` - specifies styles to override default header style
     *
     */
    headerStyle?: React.CSSProperties;

    /**
     *
     * @field `iconStyle` - specifies styles to override default close button style
     *
     */
    iconStyle?: React.CSSProperties;
}

interface ITag extends IStyle, IColor, IBackgroundColor {
    /**
     *
     * @field `label` - specifies the tag label
     *
     */
    label: string;
}

interface IToast extends IStyle {
    /**
     *
     * @field `label` - specifies the toast label
     *
     */
    label?: string;

    /**
     *
     * @field `position` - specifies the toast position
     * @default 'bottom-left'
     *
     */
    position?:
        | 'top-left'
        | 'top-center'
        | 'top-right'
        | 'bottom-left'
        | 'bottom-center'
        | 'bottom-right'
        | string;

    /**
     *
     * @field `variant` - specifies the toast variant
     * @default 'info'
     *
     */
    variant?: 'success' | 'error' | 'warning' | 'info' | string;

    /**
     *
     * @function onClose - function to trigger when the toast is to be closed
     * @returns `void`
     *
     */
    onClose: (...args) => void;
}

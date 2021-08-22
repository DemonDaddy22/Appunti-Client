/* eslint-disable no-unused-vars */

interface IStyle {
    /**
     *
     *  @field `style` - specifies styles to override default styles underlying element
     */
    style?: React.CSSProperties;
}

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

interface IGenericApiResponse {
    /**
     *
     * @field `data` - specifies API response data
     *
     */
    data: any;

    /**
     *
     * @field `status` - specifies API response status
     *
     */
    status: number;

    /**
     *
     * @field `error` - specifies API response error
     *
     */
    error: any;
}

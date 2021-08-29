/**
 *
 * @function isEmptyString - Checks if passed value is an empty string or not
 * @param {string | undefined} value
 * @returns `boolean` indicating whether `value` is an empty string
 *
 */
export const isEmptyString = (value: string | undefined): boolean =>
    !value || (typeof value === 'string' && value.trim().length === 0);

/**
 *
 * @function isValidNumber - Checks if passed value is a valid number or not
 * @param {number | string | undefined} value
 * @returns `boolean` indicating whether `value` is a valid number
 *
 */
export const isValidNumber = (value: number | string | undefined): boolean =>
    !isNaN(Number(value));

/**
 *
 * @function isEmptyList - Checks if passed object is an empty list or not
 * @param {Array<any> | undefined} obj
 * @returns `boolean` indicating whether `obj` is an empty list
 *
 */
export const isEmptyList = (obj: Array<any> | undefined): boolean =>
    !Array.isArray(obj) || (Array.isArray(obj) && obj.length === 0);

/**
 *
 * @function isEmptyObject - Checks if passed object is an empty object or not
 * @param {Object | undefined} obj
 * @returns `boolean` indicating whether `obj` is an empty object
 *
 */
export const isEmptyObject = (obj: Object | undefined): boolean =>
    !obj ||
    typeof obj !== 'object' ||
    Array.isArray(obj) ||
    Object.keys(obj).length === 0;

/**
 *
 * @function isHexColor - Checks if passed color string is hex color or not
 * @param {string} color
 * @returns `boolean` indicating whether `color` is a hex color
 *
 */
export const isHexColor = (color: string): boolean =>
    /^#([0-9A-F]{3}){1,2}$/i.test(color);

/**
 *
 * @function isValidColor - Checks if passed color string is valid color or not
 * @param {string} color
 * @returns `boolean` indicating whether `color` is a valid color
 *
 */
export const isValidColor = (color: string): boolean => {
    if (isEmptyString(color)) return false;
    const style = new Option().style;
    style.color = color;
    if (isHexColor(color)) {
        // convert hex to rgb as style.color gets converted to rgb
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
        if (!result) return false;
        color = `rgb(${parseInt(result[1], 16)}, ${parseInt(
            result[2],
            16
        )}, ${parseInt(result[3], 16)})`;
    }
    return style.color === color;
};

/**
 *
 * @function hexToRGB - Converts valid hex color string to rgb variant
 * @param {string} color
 * @returns `string | null`
 *
 */
export const hexToRGB = (color: string): string | null => {
    if (!isValidColor(color)) return null;

    // checks for 3 digit hex value (#0f0) and converts them to 6 digit hex value
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    color = color.replace(
        shorthandRegex,
        (m, r, g, b) => r + r + g + g + b + b
    );

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    // eslint-disable-next-line prettier/prettier
    return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
};

/**
 *
 * @function rgbToHex - Converts valid rgb color value to hex variant
 * @param {string} color
 * @returns `string | null`
 *
 */
export const rgbToHex = (color: string): string | null => {
    if (!isValidColor(color)) return null;

    if (isHexColor(color)) return color;

    // Turn color rgb(r, g, b) into rgb(r g b)
    const sep = color.indexOf(', ') > -1 ? ', ' : ' ';

    // Turn color rgb(r g b) into [r, g, b]
    const colorArray = color.substr(4).split(')')[0].split(sep);

    // + converts string to number
    let r = (+colorArray[0]).toString(16),
        g = (+colorArray[1]).toString(16),
        b = (+colorArray[2]).toString(16);

    if (r.length === 1) r = '0' + r;
    if (g.length === 1) g = '0' + g;
    if (b.length === 1) b = '0' + b;

    return '#' + r + g + b;
};

/**
 *
 * @function isColorDark - Checks if passed color string is dark or not
 * @param {string | undefined} color: ;
 * @returns `boolean` indicating whether `color` is a dark color
 *
 */
export const isColorDark = (color: string | undefined): boolean => {
    if (!color) return false;
    if (!isValidColor(color)) return false;

    let colorCopy: string | null = color;
    if (!isHexColor(color)) colorCopy = rgbToHex(color);

    if (!colorCopy) return false;

    const is3digitHex = /^#[0-9A-F]{3}$/i.test(colorCopy);
    if (is3digitHex)
        colorCopy = colorCopy.replace(
            /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
            (m, r, g, b) => r + r + g + g + b + b
        );

    let rgb = parseInt(colorCopy.substring(1), 16);
    let r = (rgb >> 16) & 0xff;
    let g = (rgb >> 8) & 0xff;
    let b = (rgb >> 0) & 0xff;

    let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
    return luma < 100;
};

/**
 *
 * @function truncateStringToLength - Truncates passed value to specified length
 * @param {string | undefined} value
 * @param {number | undefined} length
 * @returns truncated `value` if its length is greater than or equal to `length`
 *
 */
export const truncateStringToLength = (
    value: string | undefined,
    length: number | undefined
): string => {
    if (!value || !length || isEmptyString(value) || !isValidNumber(length))
        return '';
    return value?.length < length ? value : `${value?.substring(0, length)}...`;
};

/**
 *
 * @function createListOfSize - Creates a list of length `size` containing integers from `start`
 * @param {number} size - specifies size of list
 * @param {number} start - specifies first value of list
 * @returns list containing integers from 1 to size (included)
 *
 */
export const createListOfSize = (size: number, start: number = 1): number[] =>
    size > 0 ? Array.from(Array(size)).map(() => start++) : [];

/**
 *
 * @function throttle - Throttles (limits) the execution of `cb` by `delay`ms
 * @param {Function} cb - specifies the function to be throttled
 * @param {number} delay - specifies delay in milliseconds
 * @param {any} args - any arguments to be passed on to the throttled function
 * @returns throttled version of the input function `cb`
 *
 */
export const throttle = (cb: Function, delay: number = 200, ...args: any[]) => {
    let shouldCallCb = true;
    const prevArgs = args;
    // eslint-disable-next-line no-unused-vars
    return function (this: any) {
        const context = this;
        const args = [].slice.apply(arguments);
        if (shouldCallCb) {
            cb.apply(context, [...prevArgs, ...args]);
            shouldCallCb = false;
            setTimeout(() => {
                shouldCallCb = true;
            }, delay);
        }
    };
};

// TODO - create a debounce util as well

/**
 *
 * @function generateRandomID - Generates random ID using timestamp
 * @param {number} offset
 * @returns `number` randomly generated ID
 *
 */
export const generateRandomID = (offset: number = 1000000): number =>
    Math.floor(Math.random() * new Date().getTime()) +
    Math.floor(Math.random() * offset);

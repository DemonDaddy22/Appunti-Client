const BOOKS_API_URI_DEV: string = 'http://localhost:5000/api/v1/books';
const BOOKS_API_URI_PROD: string =
    'https://appunti-server.herokuapp.com/api/v1/books';

export const BOOKS_API_URI: string =
    process.env.NODE_ENV === 'development'
        ? BOOKS_API_URI_DEV
        : BOOKS_API_URI_PROD;

export const THEME: IThemeVariants = Object.freeze({
    LIGHT: 'light',
    DARK: 'dark',
});

export const MAX_RESULTS_OPTIONS: Array<ISelectOption> = [
    {
        label: '10',
        value: 10,
    },
    {
        label: '20',
        value: 20,
    },
    {
        label: '40',
        value: 40,
    },
];

export const NAVBAR_SCROLL_BREAKPOINT_HEIGHT = 80;

export const DEFAULT_DASH_COUNT = 4;

export const MAX_DASH_COUNT = 100;

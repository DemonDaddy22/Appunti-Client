const BOOKS_API_URI_DEV: string = 'http://localhost:5000/api/v1/books';
const BOOKS_API_URI_PROD: string =
    'https://appunti-server.herokuapp.com/api/v1/books';

export const BOOKS_API_URI: string =
    process.env.NODE_ENV === 'development'
        ? BOOKS_API_URI_DEV
        : BOOKS_API_URI_PROD;

export const HOMEPAGE_PATH: string = '/';

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

export const NAVBAR_SCROLL_BREAKPOINT_HEIGHT: number = 80;

export const DEFAULT_DASH_COUNT: number = 4;

export const MAX_DASH_COUNT: number = 100;

export const TOAST_DURATION: number = 3000;

export const PLACEHOLDER_IMAGE_URL: string =
    'https://res.cloudinary.com/yelp-camp/image/upload/v1631279832/appunti/no-book.jpg';

export const PLACEHOLDER_BOOKSHELF_URL: string =
    'https://res.cloudinary.com/yelp-camp/image/upload/v1631279832/appunti/no-bookshelf.jpg';

export const TOAST_VARIANTS: IToastVariants = Object.freeze({
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info',
});

export const TOAST_POSITIONS: IToastPositions = Object.freeze({
    TOPLEFT: 'top-left',
    TOPCENTER: 'top-center',
    TOPRIGHT: 'top-right',
    BOTTOMLEFT: 'bottom-left',
    BOTTOMCENTER: 'bottom-center',
    BOTTOMRIGHT: 'bottom-right',
});

export const BOOKSHELF_SELECT_DEFAULT_OPTION: ISelectOption = Object.freeze({
    label: 'Create new bookshelf',
    value: 'Create new bookshelf',
});

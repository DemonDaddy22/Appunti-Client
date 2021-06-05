const BOOKS_API_URI_DEV: string = 'http://localhost:5000/api/v1/books';
const BOOKS_API_URI_PROD: string = 'http://localhost:5000/api/v1/books';

export const BOOKS_API_URI: string = process.env.NODE_ENV === 'development' ? BOOKS_API_URI_DEV : BOOKS_API_URI_PROD;
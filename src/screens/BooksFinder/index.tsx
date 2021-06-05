import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { BOOKS_API_URI } from '../../resources/constants';
import Input from '../../ui-components/Input';
import classes from './styles.module.scss';

const BooksFinder: React.FC<{}> = () => {
    const { theme } = useContext(ThemeContext);

    const [query, setQuery] = useState<string>('');
    const [books, setBooks] = useState<any[]>([]);

    const handleInputChange = useCallback(
        (q: string) => setQuery(q),
        []
    );

    const fetchBooks = useCallback(
        async () => {
            const res = await fetch(`${BOOKS_API_URI}/search?q=${query}`);
            const data: IBookSearchResponse = await res.json();
            let fetchedBooks: any[] = data.data?.items || [];
            setBooks(fetchedBooks);
        },
        [query]
    );

    useEffect(() => {
        fetchBooks();
    }, [query]);

    return <div className={classes.booksFinderContainer}>
        <Input name='search' value={query} onChange={handleInputChange} />
    </div>;
};

export default BooksFinder;
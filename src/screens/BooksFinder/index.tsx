import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import useAsyncExec from '../../hooks/useAsyncExec';
import { BOOKS_API_URI } from '../../resources/constants';
import Button from '../../ui-components/Button';
import Input from '../../ui-components/Input';
import classes from './styles.module.scss';

const BooksFinder: React.FC<{}> = () => {
    const { theme } = useContext(ThemeContext);

    const [query, setQuery] = useState<string>('');
    const [books, setBooks] = useState<any[]>([]);
    const [loading, setIsLoading] = useState<boolean>(false);
    const [fetching, setIsFetching] = useState<boolean>(false);

    // TODO - style button and search bar
    const fetchBooks = useCallback(async () => {
        setIsLoading(true);
        try {
            const res = await fetch(`${BOOKS_API_URI}/search?q=${query}`);
            const data: IBookSearchResponse = await res.json();
            let fetchedBooks: any[] = data.data?.items || [];
            setBooks(fetchedBooks);
            useAsyncExec(() => setQuery(''));
        } catch (err) {
            setBooks(books);
        } finally {
            setIsLoading(false);
        }
    }, [query]);

    const handleInputChange = useCallback((q: string) => setQuery(q), []);

    const handleSearchButtonClick = useCallback(() => {
        setIsFetching(true);
        useAsyncExec(() => setIsFetching(false));
    }, []);

    useEffect(() => {
        if (fetching) fetchBooks();
    }, [fetching, fetchBooks]);

    return (
        <div className={classes.booksFinderContainer}>
            <Input name="search" value={query} onChange={handleInputChange} />
            <Button onClick={handleSearchButtonClick}>Search</Button>
        </div>
    );
};

export default BooksFinder;

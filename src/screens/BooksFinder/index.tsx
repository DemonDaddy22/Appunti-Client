import React, { useCallback, useContext, useEffect, useState } from 'react';
import SearchResultsContainer from '../../components/SearchResultsContainer';
import { ThemeContext } from '../../context/ThemeContext';
import useAsyncExec from '../../hooks/useAsyncExec';
import { BOOKS_API_URI } from '../../resources/constants';
import Button, { ButtonOutlined } from '../../ui-components/Button';
import Input from '../../ui-components/Input';
import Pagination from '../../ui-components/Pagination';
import classes from './styles.module.scss';

const BooksFinder: React.FC<{}> = () => {
    const { toggleTheme } = useContext(ThemeContext);

    const [query, setQuery] = useState<string>('');
    const [maxResults, setMaxResults] = useState<number>(10);
    const [books, setBooks] = useState<IBookSearchData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [fetching, setFetching] = useState<boolean>(false);

    // TODO - style button and search bar
    const fetchBooks = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch(
                `${BOOKS_API_URI}/search?q=${query}&maxResults=${maxResults}`
            );
            const data: IBookSearchResponse = await res.json();
            let fetchedBooks: IBookSearchData = data.data || {};
            setBooks(fetchedBooks);
            useAsyncExec(() => setQuery(''));
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [query]);

    const handleInputChange = useCallback((q: string) => setQuery(q), []);

    const handleSearchButtonClick = useCallback(() => {
        setFetching(true);
        useAsyncExec(() => setFetching(false));
    }, []);

    useEffect(() => {
        if (fetching) fetchBooks();
    }, [fetching, fetchBooks]);

    return (
        <div className={classes.booksFinderContainer}>
            <Input
                name="search"
                placeholder="Search for a book"
                value={query}
                onChange={handleInputChange}
            />
            <div className={classes.buttonsWrapper}>
                <ButtonOutlined onClick={handleSearchButtonClick}>
                    Search
                </ButtonOutlined>
                <Button onClick={toggleTheme}>Toggle Theme</Button>
            </div>
            <SearchResultsContainer data={books?.items} />
            <Pagination
                pageIndex={1}
                countPerPage={maxResults}
                totalCount={books?.totalItems}
            />
        </div>
    );
};

export default BooksFinder;

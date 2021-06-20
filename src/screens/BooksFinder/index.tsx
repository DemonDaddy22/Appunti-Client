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
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [maxResults, setMaxResults] = useState<number>(10);
    const [books, setBooks] = useState<IBookSearchData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [fetching, setFetching] = useState<boolean>(false);
    const [queryParams, setQueryParams] = useState<IBooksAPIParams>({
        q: query,
        page: pageIndex,
        maxResults,
    });

    // TODO - cover all cases for api call - q, pageIndex, maxResults
    const fetchBooks = useCallback(async () => {
        setLoading(true);
        const { q, page, maxResults } = queryParams;
        try {
            const res = await fetch(
                `${BOOKS_API_URI}/search?q=${q}&maxResults=${maxResults}&page=${
                    page - 1
                }`
            );
            const data: IBookSearchResponse = await res.json();
            let fetchedBooks: IBookSearchData = data.data || {};
            setBooks(fetchedBooks);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [query, maxResults, pageIndex]);

    const handleInputChange = useCallback((q: string) => {
        setQuery(q);
        setQueryParams((prevQueryParams) => ({ ...prevQueryParams, q }));
    }, []);

    const handleSearchButtonClick = useCallback(() => {
        setQueryParams((prevQueryParams) => ({ ...prevQueryParams, page: 1 }));
        setFetching(true);
        useAsyncExec(() => {
            setFetching(false);
            setQuery('');
        });
    }, []);

    const handlePageChange = useCallback((page) => {
        setPageIndex(page);
        setQueryParams((prevQueryParams) => ({ ...prevQueryParams, page }));
        setFetching(true);
        useAsyncExec(() => {
            setFetching(false);
        });
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
                pageRange={7}
                pageIndex={pageIndex}
                countPerPage={maxResults}
                totalCount={books?.totalItems || 0}
                handlePageChange={handlePageChange}
            />
        </div>
    );
};

export default BooksFinder;

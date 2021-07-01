import React, { useCallback, useContext, useEffect, useState } from 'react';
import SearchResultsContainer from '../../components/SearchResultsContainer';
import { ThemeContext } from '../../context/ThemeContext';
import useAsyncExec from '../../hooks/useAsyncExec';
import { BOOKS_API_URI } from '../../resources/constants';
import Button, { ButtonOutlined } from '../../ui-components/Button';
import Input from '../../ui-components/Input';
import Pagination from '../../ui-components/Pagination';
import Select from '../../ui-components/Select';
import Label from '../../ui-components/Label';
import classes from './styles.module.scss';
import { isEmptyString } from '../../utils';

const items = [
    { value: 'apple' },
    { value: 'pear' },
    { value: 'orange' },
    { value: 'grape' },
    { value: 'banana' },
];

const BooksFinder: React.FC<{}> = () => {
    const { toggleTheme } = useContext(ThemeContext);

    const [query, setQuery] = useState<string>('');
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [maxResults, setMaxResults] = useState<number>(10);
    const [maxResultsOption, setMaxResultsOption] = useState<ISelectOption>(
        items[0]
    );
    const [maxResultsInput, setMaxResultsInput] = useState<string>(
        items[0].value
    );
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

    const handleSelectInputChange = useCallback((value) => {
        if (!isEmptyString(value)) setMaxResultsInput(value);
    }, []);

    const handleOptionSelect = useCallback(
        (option) => {
            setMaxResultsOption(option);
            handleSelectInputChange(option?.value);
        },
        [handleSelectInputChange]
    );

    useEffect(() => {
        if (fetching) fetchBooks();
    }, [fetching, fetchBooks]);

    return (
        <div className={classes.booksFinderContainer}>
            <Label label="Search for a book" />
            <Input
                name="search"
                placeholder="Enter book name..."
                value={query}
                onChange={handleInputChange}
            />
            <div className={classes.buttonsWrapper}>
                <ButtonOutlined onClick={handleSearchButtonClick}>
                    Search
                </ButtonOutlined>
                <Button onClick={toggleTheme}>Toggle Theme</Button>
            </div>
            <Select
                options={items}
                onOptionChange={handleOptionSelect}
                onInputChange={handleSelectInputChange}
            />
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

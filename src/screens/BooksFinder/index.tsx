import React, { useCallback, useContext, useEffect, useState } from 'react';
import SearchResultsContainer from '../../components/SearchResultsContainer';
import { ThemeContext } from '../../context/ThemeContext';
import useAsyncExec from '../../hooks/useAsyncExec';
import { BOOKS_API_URI, MAX_RESULTS_OPTIONS } from '../../resources/constants';
import Button, { ButtonOutlined } from '../../ui-components/Button';
import Input from '../../ui-components/Input';
import Pagination from '../../ui-components/Pagination';
import Select from '../../ui-components/Select';
import Label from '../../ui-components/Label';
import classes from './styles.module.scss';
import { isEmptyString } from '../../utils';
import Loader from '../../ui-components/Loader';
import Light from '../../assets/icons/Light';
import Dark from '../../assets/icons/Dark';

const BooksFinder: React.FC<{}> = () => {
    const { toggleTheme, theme } = useContext(ThemeContext);

    const [query, setQuery] = useState<string>('');
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [maxResultsOption, setMaxResultsOption] = useState<ISelectOption>(
        MAX_RESULTS_OPTIONS[0]
    );
    const [maxResultsInput, setMaxResultsInput] = useState<string>(
        MAX_RESULTS_OPTIONS[0].label
    );
    const [books, setBooks] = useState<IBookSearchData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [fetching, setFetching] = useState<boolean>(false);
    const [queryParams, setQueryParams] = useState<IBooksAPIParams>({
        q: query,
        startIndex: pageIndex - 1,
        maxResults: maxResultsOption.value,
    });

    const fetchBooks = useCallback(async () => {
        setLoading(true);
        const { q, startIndex, maxResults } = queryParams;
        try {
            const res = await fetch(
                `${BOOKS_API_URI}/search?q=${q}&maxResults=${maxResults}&start=${startIndex}`
            );
            const data: IBookSearchResponse = await res.json();
            let fetchedBooks: IBookSearchData = data.data || {};
            setBooks(fetchedBooks);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [query, maxResultsOption, pageIndex]);

    const handleInputChange = useCallback((q: string) => {
        setQuery(q);
        setQueryParams((prevQueryParams) => ({ ...prevQueryParams, q }));
    }, []);

    const handleSearchButtonClick = useCallback(() => {
        setQueryParams((prevQueryParams) => ({
            ...prevQueryParams,
            startIndex: 0,
        }));
        setFetching(true);
        useAsyncExec(() => {
            setFetching(false);
            setQuery('');
        });
    }, []);

    const handlePageChange = useCallback(
        (page) => {
            setPageIndex(page);
            setQueryParams((prevQueryParams) => ({
                ...prevQueryParams,
                startIndex: (page - 1) * maxResultsOption.value,
            }));
            setFetching(true);
            useAsyncExec(() => {
                setFetching(false);
            });
        },
        [maxResultsOption]
    );

    const handleSelectInputChange = useCallback((value) => {
        setMaxResultsInput(!isEmptyString(value) ? value : '');
    }, []);

    const handleOptionSelect = useCallback(
        (option) => {
            if (option !== maxResultsOption) {
                setQueryParams((prevQueryParams) => ({
                    ...prevQueryParams,
                    maxResults: option.value,
                }));
                setMaxResultsOption(option);
                handleSelectInputChange(option?.value);
                setFetching(true);
                useAsyncExec(() => {
                    setFetching(false);
                });
            }
        },
        [handleSelectInputChange, maxResultsOption]
    );

    useEffect(() => {
        if (fetching) fetchBooks();
    }, [fetching, fetchBooks]);

    return (
        <>
            {loading && (
                <div className={classes.loaderWrapper}>
                    <Loader />
                </div>
            )}
            <div className={classes.booksFinderContainer}>
                <div className={classes.inputWrapper}>
                    <div className={classes.inputCol}>
                        <Label label="Search for a book" />
                        <Input
                            name="search"
                            placeholder="Enter book name..."
                            value={query}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={classes.inputCol}>
                        <Label label="Max results per page" />
                        <Select
                            value={maxResultsInput}
                            options={MAX_RESULTS_OPTIONS}
                            onOptionChange={handleOptionSelect}
                            onInputChange={handleSelectInputChange}
                        />
                    </div>
                </div>
                <div className={classes.buttonsWrapper}>
                    <ButtonOutlined onClick={handleSearchButtonClick}>
                        Search
                    </ButtonOutlined>
                    <Button onClick={toggleTheme}>Toggle Theme</Button>
                    <Light color={theme.textPrimary} />
                    <Dark color={theme.textPrimary} />
                </div>
                <SearchResultsContainer data={books?.items} />
                <Pagination
                    disabled={loading}
                    pageRange={7}
                    pageIndex={pageIndex}
                    countPerPage={maxResultsOption.value}
                    totalCount={books?.totalItems || 0}
                    handlePageChange={handlePageChange}
                />
            </div>
        </>
    );
};

export default BooksFinder;

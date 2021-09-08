/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ToastContext } from '../../context/ToastContext';
import {
    BOOKSHELF_SELECT_DEFAULT_OPTION,
    BOOKS_API_URI,
    PLACEHOLDER_IMAGE_URL,
    TOAST_VARIANTS,
} from '../../resources/constants';
import { ButtonOutlined } from '../../ui-components/Button';
import Loader from '../../ui-components/Loader';
import Select from '../../ui-components/Select';
import Tag from '../../ui-components/Tag';
import { isEmptyObject, isEmptyString } from '../../utils';
import NewBookshelfForm from '../NewBookshelfForm';
import classes from './styles.module.scss';

const SearchResultsBookModal: React.FC<ISearchResultsBook> = (props) => {
    const { id, data, epub, pdf } = props;

    const { addToast } = useContext(ToastContext);

    const [loading, setLoading] = useState<boolean>(false);
    const [foundBook, setFoundBook] = useState<any>(null);
    const [bookshelfOptions, setBookshelfOptions] = useState<
        Array<ISelectOption>
    >([BOOKSHELF_SELECT_DEFAULT_OPTION]);
    const [bookshelfOption, setBookshelfOption] =
        useState<ISelectOption | null>(null);
    const [bookshelfLabel, setBookshelfLabel] = useState<string>('');
    const [updateBookshelf, setUpdateBookshelf] = useState<boolean>(false);

    useEffect(() => {
        const findBook = async () => {
            if (!isEmptyString(id)) {
                setLoading(true);
                try {
                    const response = await axios.get(
                        `${BOOKS_API_URI}/book/find/g`,
                        { params: { gid: id } }
                    );
                    const data: IGenericApiResponse = response.data;
                    if (!isEmptyObject(data?.error)) {
                        throw new Error(data.error?.message);
                    }
                    setFoundBook(data?.data?.book);
                } catch (error) {
                    // do nothing for now
                }
                setLoading(false);
            }
        };
        findBook();
    }, [id]);

    useEffect(() => {
        const getBookshelves = async () => {
            try {
                const response = await axios.get(
                    `${BOOKS_API_URI}/bookshelf/getAll`
                );
                const data: IGenericApiResponse = response.data;
                if (!isEmptyObject(data?.error)) {
                    throw new Error(data.error?.message);
                }

                const bookshelves =
                    data?.data?.bookshelves?.reduce((accu: Array<any>, bookshelf: any) => {
                        return !isEmptyObject(bookshelf)
                            ? [...accu, {
                                label: bookshelf.title,
                                value: bookshelf.uid,
                            }]
                            : accu;
                    }, []) || [];
                setBookshelfOptions([...bookshelves, BOOKSHELF_SELECT_DEFAULT_OPTION]);
            } catch (error) {
                // do nothing for now
            }
        };
        getBookshelves();
    }, []);

    useEffect(() => {
        if (updateBookshelf) {
            const makeUpdateBookshelfCall = async () => {
                try {
                    const response = await axios.patch(
                            `${BOOKS_API_URI}/bookshelf/update`,
                            { books: [foundBook] },
                            { params: { uid: bookshelfOption?.value } },
                    );
                    const data: IGenericApiResponse = response.data;
                    if (!isEmptyObject(data?.error)) {
                        throw new Error(data.error?.message);
                    }
                    addToast({
                        label: 'Successfully updated the bookshelf',
                        variant: TOAST_VARIANTS.SUCCESS,
                    });
                } catch (error) {
                    const err: any = error;
                    addToast({
                        label: err?.message,
                        variant: TOAST_VARIANTS.ERROR,
                    });
                }
                setUpdateBookshelf(false);
            };
            makeUpdateBookshelfCall();
        }
    }, [updateBookshelf]);

    const handleAddBook = useCallback(async () => {
        if (
            isEmptyObject(foundBook) &&
            !isEmptyString(id) &&
            !isEmptyObject(data)
        ) {
            const book = {
                gid: id,
                title: data?.title || '',
                subtitle: data?.subtitle || '',
                description: data?.description || '',
                publishedDate: data?.publishedDate || '',
                pageCount: data?.pageCount || 0,
                language: data?.language || '',
                imageLink: data?.imageLinks?.thumbnail || PLACEHOLDER_IMAGE_URL,
                epub,
                pdf,
                authors: data?.authors || [],
                categories: data?.categories || [],
                industryIdentifiers: data?.industryIdentifiers || [],
            };
            try {
                // eslint-disable-next-line prettier/prettier
                const response = await axios.post(`${BOOKS_API_URI}/book/add`, { book });
                if (!isEmptyObject(response?.data?.error)) {
                    throw new Error(response.data.error?.message);
                }
                addToast({
                    label: 'Successfully added the book',
                    variant: TOAST_VARIANTS.SUCCESS,
                });
                setFoundBook(response?.data?.data?.book);
            } catch (error) {
                const err: any = error;
                addToast({
                    label: err?.message,
                    variant: TOAST_VARIANTS.ERROR,
                });
            }
        }
    }, [foundBook, id, data, epub, pdf]);

    const handleAddBookToBookshelf = useCallback(async () => {
        if (!foundBook) await handleAddBook();
        setUpdateBookshelf(true);
    }, [foundBook, handleAddBook]);

    const handleSelectInputChange = useCallback((value) => {
        setBookshelfLabel(!isEmptyString(value) ? value : '');
    }, []);

    const handleOptionSelect = useCallback(
        (option) => {
            if (option !== bookshelfOption) {
                setBookshelfOption(option);
                handleSelectInputChange(option?.label || '');
            }
        },
        [handleSelectInputChange, bookshelfOption]
    );

    const handleNewBookshelfFormSubmit = useCallback((bookshelf: any) => {
        if (!isEmptyObject(bookshelf)) {
            const bookshelfOption: ISelectOption = { label: bookshelf.title, value: bookshelf.uid };
            handleOptionSelect(bookshelfOption);
            setBookshelfOptions(prevOptions => [bookshelfOption, ...prevOptions]);
        } else {
            addToast({
                label: 'Something went wrong, please try again',
                variant: TOAST_VARIANTS.ERROR,
            });
        }
    }, [handleOptionSelect]);

    return (
        <>
            {loading && (
                <div className={classes.loaderWrapper}>
                    <Loader />
                </div>
            )}
            <div className={classes.contentContainer}>
                <div className={classes.column}>
                    {data?.imageLinks?.thumbnail ? (
                        <img
                            className={classes.image}
                            src={data.imageLinks.thumbnail}
                            alt={data?.title}
                        />
                    ) : (
                        <div className={classes.imagePlaceholder}>
                            <img
                                src="https://res.cloudinary.com/yelp-camp/image/upload/v1624193684/BookPlaceholder.jpg"
                                alt="no-cover"
                            />
                        </div>
                    )}
                </div>
                <div className={classes.column}>
                    <div className={classes.subtitle}>
                        {data.subtitle}
                    </div>
                    <div className={classes.authors}>
                        {data.authors?.join(', ')}
                    </div>
                    <div className={classes.bookshelfSelectWrapper}>
                        <Select
                            value={bookshelfLabel}
                            options={bookshelfOptions}
                            placeholder="Add to bookshelf"
                            onOptionChange={handleOptionSelect}
                            onInputChange={handleSelectInputChange}
                        />
                        {bookshelfOption !== BOOKSHELF_SELECT_DEFAULT_OPTION ? (
                            <ButtonOutlined
                                disabled={loading}
                                onClick={handleAddBookToBookshelf}
                                style={{ width: 'fit-content' }}
                            >
                                Add Book
                            </ButtonOutlined>
                        ) : null}
                    </div>
                    {bookshelfOption === BOOKSHELF_SELECT_DEFAULT_OPTION ? (
                        <NewBookshelfForm
                            foundBook={foundBook}
                            handleCancel={() => handleOptionSelect(null)}
                            handleSubmit={handleNewBookshelfFormSubmit}
                            handleAddBook={handleAddBook}
                        />
                    ) : null}
                    <div className={classes.description}>
                        {data.description || 'No Preview Available'}
                    </div>
                    <div className={classes.infoContainer}>
                        <div className={classes.infoCell}>
                            <div className={classes.infoHeading}>
                                Page Count
                            </div>
                            <div className={classes.infoContent}>
                                {data.pageCount || '-'}
                            </div>
                        </div>
                        <div className={classes.infoCell}>
                            <div className={classes.infoHeading}>
                                Published Date
                            </div>
                            <div className={classes.infoContent}>
                                {data.publishedDate || '-'}
                            </div>
                        </div>
                        <div className={classes.infoCell}>
                            <div className={classes.infoHeading}>Language</div>
                            <div className={classes.infoContent}>
                                {data.language || '-'}
                            </div>
                        </div>
                        <div className={classes.infoCell}>
                            <div className={classes.infoHeading}>
                                {data.categories?.length === 1
                                    ? 'Category'
                                    : 'Categories'}
                            </div>
                            <div className={classes.infoContent}>
                                {data.categories?.map(
                                    (category: string, index: number) => (
                                        <Tag
                                            key={`${category}-${index}`}
                                            label={category}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchResultsBookModal;

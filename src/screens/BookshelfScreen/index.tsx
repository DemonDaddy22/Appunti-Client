// TODO - test case of no books
// TODO - add bookshelf to book model
// TODO - once book gets added to bookshelf, hide the bookshelf dropdown and show the selected bookshelf
import axios from 'axios';
import { useCallback, useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import BookCard from '../../components/BookCard';
import { ToastContext } from '../../context/ToastContext';
import {
    BOOKS_API_URI,
    HOMEPAGE_PATH,
    PLACEHOLDER_BOOKSHELF_URL,
    TOAST_VARIANTS,
} from '../../resources/constants';
import { IBookshelf, IBookshelfScreen } from '../../types/screens';
import { ButtonOutlined } from '../../ui-components/Button';
import Divider from '../../ui-components/Divider';
import Loader from '../../ui-components/Loader';
import { isEmptyList, isEmptyObject, isEmptyString } from '../../utils';
import classes from './styles.module.scss';

const BookshelfScreen: React.FC<IBookshelfScreen> = (props) => {
    const { match, history } = props;

    const { addToast } = useContext(ToastContext);

    const [loading, setLoading] = useState<boolean>(false);
    const [bookshelf, setBookshelf] = useState<IBookshelf | null>(null);

    const redirectToFindBooks = useCallback(
        () => history.push(HOMEPAGE_PATH),
        []
    );

    useEffect(() => {
        const getBookshelf = async (bookshelfId: string) => {
            if (!isEmptyString(bookshelfId)) {
                setLoading(true);
                try {
                    const response = await axios.get(
                        `${BOOKS_API_URI}/bookshelf/get/u`,
                        { params: { uid: bookshelfId } }
                    );
                    const data: IGenericApiResponse = response.data;
                    if (!isEmptyObject(data?.error)) {
                        throw new Error(data.error?.message);
                    }
                    setBookshelf(data?.data?.bookshelf);
                } catch (error) {
                    const err: any = error;
                    addToast({
                        label: err?.message,
                        variant: TOAST_VARIANTS.ERROR,
                    });
                }
                setLoading(false);
            }
        };
        getBookshelf(match?.params?.bookshelfId);
    }, [match?.params?.bookshelfId]);

    return (
        <>
            {loading && (
                <div className={classes.loaderWrapper}>
                    <Loader />
                </div>
            )}
            {!loading && !isEmptyObject(bookshelf) ? (
                <div className={classes.bookshelfContainer}>
                    <div className={classes.bookshelfContentRow}>
                        <div className={classes.bookshelfContentCol}>
                            <img
                                src={
                                    bookshelf?.coverImageLink ||
                                    PLACEHOLDER_BOOKSHELF_URL
                                }
                                alt={bookshelf?.title}
                                className={classes.bookshelfCover}
                            />
                        </div>
                        <div className={classes.bookshelfContentCol}>
                            <div className={classes.bookshelfTitle}>
                                {bookshelf?.title}
                            </div>
                            {!isEmptyString(bookshelf?.updatedAt) && (
                                <div className={classes.bookshelfUpdated}>
                                    Last updated:{' '}
                                    {new Date(
                                        bookshelf?.updatedAt || ''
                                    ).toDateString()}
                                </div>
                            )}
                            <div className={classes.bookshelfDescription}>
                                {bookshelf?.description}
                            </div>
                        </div>
                    </div>
                    <Divider style={{ margin: '3rem 0' }} />
                    {!isEmptyList(bookshelf?.books) ? (
                        <div className={classes.booksContainer}>
                            {bookshelf?.books?.map(
                                (book: IBook, index: number) => (
                                    <BookCard
                                        key={book?.uid || `book-card-${index}`}
                                        {...book}
                                    />
                                )
                            )}
                        </div>
                    ) : (
                        <div className={classes.noBooksContainer}>
                            <div className={classes.noBooksText}>
                                No books present in the bookshelf
                            </div>
                            <ButtonOutlined
                                disabled={loading}
                                onClick={redirectToFindBooks}
                                style={{ width: 'fit-content' }}
                            >
                                Find Books
                            </ButtonOutlined>
                        </div>
                    )}
                </div>
            ) : null}
        </>
    );
};

export default withRouter(BookshelfScreen);

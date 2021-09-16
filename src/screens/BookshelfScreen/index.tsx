// TODO - test case of no books
// TODO - add bookshelf to book model
// TODO - once book gets added to bookshelf, hide the bookshelf dropdown and show the selected bookshelf
// TODO - add quote of the day in sidebar
// TODO - create a floating option menu - (take this up next)
import axios from 'axios';
import { useCallback, useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import BookshelfBooksContainer from '../../components/BookshelfBooksContainer';
import BookshelfInfo from '../../components/BookshelfInfo';
import { ToastContext } from '../../context/ToastContext';
import {
    BOOKS_API_URI,
    HOMEPAGE_PATH,
    TOAST_VARIANTS,
} from '../../resources/constants';
import { IBookshelf, IBookshelfScreen } from '../../types/screens';
import Divider from '../../ui-components/Divider';
import Loader from '../../ui-components/Loader';
import { isEmptyObject, isEmptyString } from '../../utils';
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
                    <BookshelfInfo bookshelf={bookshelf} />
                    <Divider style={{ margin: '3rem 0' }} />
                    <BookshelfBooksContainer
                        loading={loading}
                        redirectToFindBooks={redirectToFindBooks}
                        books={bookshelf?.books}
                    />
                </div>
            ) : null}
        </>
    );
};

export default withRouter(BookshelfScreen);

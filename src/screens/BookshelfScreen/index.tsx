// /bookshelf/:id
// props.match.params.bookshelfId
// make an API call to fetch bookshelf for provided ID
// for now show simple text 'No bookshelf found', if bookshelf is not found
// afterwards create a error page which lets user create a new bookshelf there and then
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { ToastContext } from '../../context/ToastContext';
import { BOOKS_API_URI, TOAST_VARIANTS } from '../../resources/constants';
import { IBookshelf, IBookshelfScreen } from '../../types/screens';
import Loader from '../../ui-components/Loader';
import { isEmptyObject, isEmptyString } from '../../utils';
import classes from './styles.module.scss';

const BookshelfScreen: React.FC<IBookshelfScreen> = (props) => {
    const { match } = props;

    const { addToast } = useContext(ToastContext);

    const [loading, setLoading] = useState<boolean>(false);
    const [bookshelf, setBookshelf] = useState<IBookshelf | null>(null);

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
            {!isEmptyObject(bookshelf) && !loading ? (
                <h2>{bookshelf?.title}</h2>
            ) : (
                <h3>No Bookshelf found</h3>
            )}
        </>
    );
};

export default withRouter(BookshelfScreen);

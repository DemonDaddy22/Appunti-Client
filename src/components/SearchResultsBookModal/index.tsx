import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import {
    BOOKS_API_URI,
    PLACEHOLDER_IMAGE_URL,
} from '../../resources/constants';
import { ButtonOutlined } from '../../ui-components/Button';
import Loader from '../../ui-components/Loader';
import Tag from '../../ui-components/Tag';
import { isEmptyObject, isEmptyString } from '../../utils';
import classes from './styles.module.scss';

const SearchResultsBookModal: React.FC<ISearchResultsBook> = (props) => {
    const { id, data, epub, pdf } = props;

    const [loading, setLoading] = useState<boolean>(false);
    const [isFound, setIsFound] = useState<boolean>(false);

    useEffect(() => {
        const findBook = async () => {
            if (!isEmptyString(id)) {
                setLoading(true);
                try {
                    const response = await axios.get(
                        `${BOOKS_API_URI}/book/find/gid`,
                        { params: { gid: id } }
                    );
                    const data: IGenericApiResponse = response.data;
                    setIsFound(data?.status === 200);
                } catch (error) {
                    setIsFound(false);
                }
                setLoading(false);
            }
        };
        findBook();
    }, [id]);

    const handleAddBook = useCallback(async () => {
        // make add book API call
        if (!isFound && !isEmptyString(id) && !isEmptyObject(data)) {
            setLoading(true);
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
                await axios.post(`${BOOKS_API_URI}/book/add`, { book });
                setIsFound(true);
            } catch (error) {
                // TODO - create a toast component and use it to display error
            }
            setLoading(false);
        }
    }, [isFound, id, data, epub, pdf]);

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
                    <div className={classes.subtitle}>{data.subtitle}</div>
                    <div className={classes.authors}>
                        {data.authors?.join(', ')}
                    </div>
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
                    <ButtonOutlined
                        disabled={loading || (!loading && isFound)}
                        onClick={handleAddBook}
                        style={{ width: 'fit-content' }}
                    >
                        {isFound ? 'Book Added' : 'Add Book'}
                    </ButtonOutlined>
                </div>
            </div>
        </>
    );
};

export default SearchResultsBookModal;

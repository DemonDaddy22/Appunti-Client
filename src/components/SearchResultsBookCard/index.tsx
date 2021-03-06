/* eslint-disable prettier/prettier */
import React, { useCallback, useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { PLACEHOLDER_IMAGE_URL } from '../../resources/constants';
import Modal from '../../ui-components/Modal';
import { isEmptyObject, truncateStringToLength } from '../../utils';
import SearchResultsBookModal from '../SearchResultsBookModal';
import classes from './styles.module.scss';

const SearchResultsBookCard: React.FC<ISearchResultsBookCard> = (props) => {
    const { data, style } = props;

    const { getThemedValue } = useContext(ThemeContext);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleModalOpen = useCallback(() => setIsModalOpen(true), []);

    const handleModalClose = useCallback(() => setIsModalOpen(false), []);

    return !isEmptyObject(data) ? (
        <>
            <div
                className={classes.searchResultsBookCardContainer}
                style={{
                    backgroundColor: getThemedValue('#FFFFFF', '#121929'),
                    ...style,
                }}
                onClick={handleModalOpen}
            >
                <div className={classes.column}>
                    {data.volumeInfo?.imageLinks?.thumbnail ? (
                        <img
                            className={classes.image}
                            src={data.volumeInfo.imageLinks.thumbnail}
                            alt={data.volumeInfo?.title}
                        />
                    ) : (
                        <div className={classes.imagePlaceholder}>
                            <img
                                src={PLACEHOLDER_IMAGE_URL}
                                alt="no-cover"
                            />
                        </div>
                    )}
                </div>
                <div className={classes.column}>
                    <div className={classes.title}>
                        {data.volumeInfo?.title}
                    </div>
                    <div className={classes.authors}>
                        {data.volumeInfo?.authors?.join(', ')}
                    </div>
                    <div className={classes.date}>
                        {data.volumeInfo?.publishedDate}
                    </div>
                    <div className={classes.description}>
                        {data.volumeInfo?.description
                            ? truncateStringToLength(
                                data.volumeInfo?.description,
                                200
                            )
                            : data.volumeInfo?.subtitle
                                ? truncateStringToLength(data.volumeInfo?.subtitle, 200)
                                : 'No Preview Available'}
                    </div>
                </div>
            </div>
            <Modal
                header={data.volumeInfo?.title || ''}
                open={isModalOpen}
                onClose={handleModalClose}
                containerStyle={{ maxWidth: '60rem' }}
            >
                <SearchResultsBookModal
                    id={data.id}
                    data={data.volumeInfo}
                    epub={data.accessInfo?.epub || {}}
                    pdf={data.accessInfo?.pdf || {}}
                />
            </Modal>
        </>
    ) : null;
};

export default SearchResultsBookCard;

import React from 'react';
import { PLACEHOLDER_IMAGE_URL } from '../../resources/constants';
import { IBook } from '../../types/components';
import { isEmptyString, truncateStringToLength } from '../../utils';
import classes from './styles.module.scss';

// TODO - animate overlay height using framer
const BookCard: React.FC<IBook> = (props) => {
    const { title, publishedDate, rating, ratingsCount, language, imageLink } =
        props;

    return (
        <div className={classes.bookCard}>
            <img
                src={imageLink || PLACEHOLDER_IMAGE_URL}
                className={classes.bookCardImage}
            />
            <div className={classes.bookCardContent}>
                <div className={classes.bookCardContentRow}>
                    {!isEmptyString(title) && (
                        <>
                            <div className={classes.bookCardTitleHeader}>
                                Title
                            </div>
                            <div className={classes.bookCardContentValue}>
                                {truncateStringToLength(title, 50)}
                            </div>
                        </>
                    )}
                </div>
                <div className={classes.bookCardInfo}>
                    {!isEmptyString(publishedDate) && (
                        <div className={classes.bookCardContentRow}>
                            <div className={classes.bookCardContentHeader}>
                                Published
                            </div>
                            <div className={classes.bookCardContentValue}>
                                {publishedDate}
                            </div>
                        </div>
                    )}
                    {!isEmptyString(language) && (
                        <div className={classes.bookCardContentRow}>
                            <div className={classes.bookCardContentHeader}>
                                Language
                            </div>
                            <div className={classes.bookCardContentValue}>
                                {language?.toUpperCase()}
                            </div>
                        </div>
                    )}
                    {rating ? (
                        <div className={classes.bookCardContentRow}>
                            <div className={classes.bookCardContentHeader}>
                                Ratings
                            </div>
                            <div className={classes.bookCardContentValue}>
                                {rating} ({ratingsCount})
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default BookCard;

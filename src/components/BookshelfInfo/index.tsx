import React from 'react';
import { PLACEHOLDER_BOOKSHELF_URL } from '../../resources/constants';
import { IBookshelfInfo } from '../../types/components';
import { isEmptyObject, isEmptyString } from '../../utils';
import classes from './styles.module.scss';

const BookshelfInfo: React.FC<IBookshelfInfo> = (props) => {
    const { bookshelf } = props;

    return !isEmptyObject(bookshelf) ? (
        <div className={classes.bookshelfContentRow}>
            <div className={classes.bookshelfContentCol}>
                <img
                    src={bookshelf?.coverImageLink || PLACEHOLDER_BOOKSHELF_URL}
                    alt={bookshelf?.title}
                    className={classes.bookshelfCover}
                />
            </div>
            <div className={classes.bookshelfContentCol}>
                <div className={classes.bookshelfTitle}>{bookshelf?.title}</div>
                {!isEmptyString(bookshelf?.updatedAt) && (
                    <div className={classes.bookshelfUpdated}>
                        Last updated:{' '}
                        {new Date(bookshelf?.updatedAt || '').toDateString()}
                    </div>
                )}
                <div className={classes.bookshelfDescription}>
                    {bookshelf?.description}
                </div>
            </div>
        </div>
    ) : null;
};

export default BookshelfInfo;

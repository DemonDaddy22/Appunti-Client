import React, { useState } from 'react';
import DotsVertical from '../../assets/icons/DotsVertical';
import { GREY_50, RED_600 } from '../../resources/colors';
import { PLACEHOLDER_BOOKSHELF_URL } from '../../resources/constants';
import { IBookshelfInfo } from '../../types/components';
import IconButton from '../../ui-components/Button/IconButton';
import Menu from '../../ui-components/Menu';
import { isEmptyObject, isEmptyString } from '../../utils';
import classes from './styles.module.scss';

// TODO - create a edit modal
const BookshelfInfo: React.FC<IBookshelfInfo> = (props) => {
    const { bookshelf } = props;

    const [showMenu, setShowMenu] = useState<boolean>(false);

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
                <div className={classes.bookshelfTitleWrapper}>
                    <div className={classes.bookshelfTitle}>
                        {bookshelf?.title}
                    </div>
                    <div className={classes.menuIconWrapper}>
                        <IconButton
                            onClick={() =>
                                setShowMenu((prevValue) => !prevValue)
                            }
                        >
                            <DotsVertical
                                color={GREY_50}
                                style={{ width: 24, height: 24 }}
                            />
                        </IconButton>
                        {showMenu && (
                            <Menu
                                options={[
                                    {
                                        id: 1,
                                        label: 'Edit',
                                        onSelect: () => console.log('edit'),
                                    },
                                    {
                                        id: 2,
                                        label: 'Delete',
                                        onSelect: () => console.log('Delete'),
                                        style: { color: RED_600 },
                                    },
                                ]}
                            />
                        )}
                    </div>
                </div>
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

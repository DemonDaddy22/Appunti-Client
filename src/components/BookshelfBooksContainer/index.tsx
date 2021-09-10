import React from 'react';
import { IBookshelfBooksContainer } from '../../types/components';
import { ButtonOutlined } from '../../ui-components/Button';
import { isEmptyList } from '../../utils';
import BookCard from '../BookCard';
import classes from './styles.module.scss';

const BookshelfBooksContainer: React.FC<IBookshelfBooksContainer> = (props) => {
    const { books, loading, redirectToFindBooks } = props;

    return !isEmptyList(books) ? (
        <div className={classes.booksContainer}>
            {books?.map((book, index: number) => (
                <BookCard key={book?.uid || `book-card-${index}`} {...book} />
            ))}
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
    );
};

export default BookshelfBooksContainer;

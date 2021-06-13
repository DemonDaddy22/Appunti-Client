import React from 'react';
import { isEmptyObject, truncateStringToLength } from '../../utils';
import classes from './styles.module.scss';

// TODO - show 1 card per row for smaller screens
// TODO - for mobile screens, show content in single column, for tabs, show in 2 columns
// TODO - for small laptops and above, show multiple cards in single row, with card resembling mobile cards
const SearchResultsBookCard: React.FC<ISearchResultsBookCard> = (props) => {
    const { data, style } = props;

    return !isEmptyObject(data) ? (
        <div className={classes.searchResultsBookCardContainer} style={style}>
            <div className={classes.column}>
                <img
                    className={classes.image}
                    src={data.volumeInfo?.imageLinks?.thumbnail}
                    alt={data.volumeInfo?.title}
                />
            </div>
            <div className={classes.column}>
                <div className={classes.title}>
                    {truncateStringToLength(data.volumeInfo?.title, 25)}
                </div>
                <div className={classes.authors}>
                    {data.volumeInfo?.authors?.join(',')}
                </div>
                <div className={classes.date}>
                    {data.volumeInfo?.publishedDate}
                </div>
                <div className={classes.description}>
                    {truncateStringToLength(data.volumeInfo?.description, 100)}
                </div>
            </div>
        </div>
    ) : null;
};

export default SearchResultsBookCard;

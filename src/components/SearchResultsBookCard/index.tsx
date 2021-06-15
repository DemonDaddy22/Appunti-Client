import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { isEmptyObject, truncateStringToLength } from '../../utils';
import classes from './styles.module.scss';

const SearchResultsBookCard: React.FC<ISearchResultsBookCard> = (props) => {
    const { getThemedValue } = useContext(ThemeContext);
    const { data, style } = props;

    return !isEmptyObject(data) ? (
        <div
            className={classes.searchResultsBookCardContainer}
            style={{
                backgroundColor: getThemedValue('#FFFFFF', '#121929'),
                ...style,
            }}
        >
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
                    {truncateStringToLength(data.volumeInfo?.description, 200)}
                </div>
            </div>
        </div>
    ) : null;
};

export default SearchResultsBookCard;

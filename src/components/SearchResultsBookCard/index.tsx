/* eslint-disable prettier/prettier */
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
                {data.volumeInfo?.imageLinks?.thumbnail ? (
                    <img
                        className={classes.image}
                        src={data.volumeInfo.imageLinks.thumbnail}
                        alt={data.volumeInfo?.title}
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
                <div className={classes.title}>
                    {data.volumeInfo?.title}
                </div>
                <div className={classes.authors}>
                    {data.volumeInfo?.authors?.join(',')}
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
    ) : null;
};

export default SearchResultsBookCard;

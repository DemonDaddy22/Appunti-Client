import React from 'react';
import classes from './styles.module.scss';

const SearchResultsBookModal: React.FC<ISearchResultsBook> = (props) => {
    const { data } = props;

    return (
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
                {/* create a container for below 4 items */}
                <div className={classes.date}>{data.publishedDate}</div>
                <div className={classes.date}>{data.pageCount}</div>
                <div className={classes.date}>
                    {data.categories?.join(', ')}
                </div>
                <div className={classes.date}>{data.language}</div>
            </div>
        </div>
    );
};

export default SearchResultsBookModal;

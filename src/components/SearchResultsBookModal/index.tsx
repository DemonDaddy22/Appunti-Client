import React from 'react';
import Tag from '../../ui-components/Tag';
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
                <div className={classes.infoContainer}>
                    <div className={classes.infoCell}>
                        <div className={classes.infoHeading}>
                            Published Date
                        </div>
                        <div className={classes.infoContent}>
                            {data.publishedDate || '-'}
                        </div>
                    </div>
                    <div className={classes.infoCell}>
                        <div className={classes.infoHeading}>Pages</div>
                        <div className={classes.infoContent}>
                            {data.pageCount || '-'}
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
            </div>
        </div>
    );
};

export default SearchResultsBookModal;

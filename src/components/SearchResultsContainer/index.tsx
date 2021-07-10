import React from 'react';
import { isEmptyList } from '../../utils';
import SearchResultsBookCard from '../SearchResultsBookCard';
import classes from './styles.module.scss';

const SearchResultsContainer: React.FC<ISearchResultsContainer> = (props) => {
    const { data, style } = props;

    return (
        <div className={classes.searchResultsContainer} style={style}>
            {!isEmptyList(data) &&
                data?.map((book, i) => (
                    <SearchResultsBookCard
                        key={book?.id || i}
                        data={book}
                    ></SearchResultsBookCard>
                ))}
        </div>
    );
};

export default SearchResultsContainer;

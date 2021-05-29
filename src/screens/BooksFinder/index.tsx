import React, { useCallback, useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Input from '../../ui-components/Input';
import classes from './styles.module.scss';

const BooksFinder: React.FC<{}> = () => {
    const { theme } = useContext(ThemeContext);

    const [query, setQuery] = useState('');

    const handleInputChange = useCallback(
        (q: string) => setQuery(q),
        []
    );

    return <div className={classes.booksFinderContainer}>
        <Input name='search' value={query} onChange={handleInputChange} />
    </div>;
};

export default BooksFinder;
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createListOfSize, isValidNumber } from '../../utils';
import classes from './styles.module.scss';

const Pagination = (props: any) => {
    const { pageRange, pageIndex, countPerPage, totalCount, handlePageChange } =
        props;

    const [totalPages, setTotalPages] = useState<number>(0);
    const [currPages, setCurrPages] = useState<number[]>(() =>
        createListOfSize(pageRange)
    );

    useEffect(() => {
        if (isValidNumber(pageRange)) {
            const newPages = createListOfSize(
                pageRange,
                pageIndex > 0 ? pageIndex : 1
            );
            setCurrPages(newPages);
        }
    }, [pageRange]);

    useEffect(() => {
        setTotalPages(
            countPerPage <= 0 ? 0 : Math.ceil(totalCount / countPerPage)
        );
    }, [countPerPage, totalCount]);

    const doesPageExistInRange = useCallback(
        (page: number) =>
            page >= currPages[0] && page <= currPages[pageRange - 1],
        [pageRange, currPages]
    );

    const handlePrevButtonClick = useCallback(() => {
        const newPageIndex = pageIndex - 1;
        if (newPageIndex < 1) return;
        if (!doesPageExistInRange(newPageIndex)) {
            if (newPageIndex >= pageRange) {
                const newPages = createListOfSize(
                    pageRange,
                    newPageIndex - pageRange + 1
                );
                setCurrPages(newPages);
            } else {
                const newPages = createListOfSize(pageRange, 1);
                setCurrPages(newPages);
            }
        }
        handlePageChange(newPageIndex);
    }, [pageIndex, pageRange]);

    const handleNextButtonClick = useCallback(() => {
        const newPageIndex = pageIndex + 1;
        if (newPageIndex > totalPages) return;
        if (!doesPageExistInRange(newPageIndex)) {
            if (newPageIndex <= totalPages - pageRange + 1) {
                const newPages = createListOfSize(pageRange, newPageIndex);
                setCurrPages(newPages);
            } else {
                const range = totalPages - newPageIndex + 1;
                const newPages = [
                    ...createListOfSize(
                        pageRange - range,
                        newPageIndex - pageRange + range
                    ),
                    ...createListOfSize(range, newPageIndex),
                ];
                setCurrPages(newPages);
            }
        }
        handlePageChange(newPageIndex);
    }, [totalPages, pageIndex, pageRange]);

    const renderPages = useMemo(
        () => (
            <div style={{ display: 'flex', gap: 4 }}>
                {currPages.map((page) => (
                    <div
                        onClick={() => handlePageChange(page)}
                        className={`${classes.btn} ${
                            page === pageIndex && classes.active
                        }`}
                        key={`page-${page}-of-${totalPages}`}
                    >
                        {page}
                    </div>
                ))}
            </div>
        ),
        [currPages, pageIndex, countPerPage, totalCount]
    );

    return totalCount > 0 ? (
        <div style={{ display: 'flex', gap: 8 }}>
            <button disabled={pageIndex === 1} onClick={handlePrevButtonClick}>
                Prev
            </button>
            {renderPages}
            <button
                disabled={pageIndex === totalPages}
                onClick={handleNextButtonClick}
            >
                Next
            </button>
        </div>
    ) : null;
};

export default Pagination;

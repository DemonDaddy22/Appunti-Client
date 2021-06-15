import React, { useMemo } from 'react';

const Pagination = (props: any) => {
    const { pageIndex, countPerPage, totalCount } = props;

    // 1 2 3 4 5

    // 1 2 3 ... 6
    // 1 ... 4 5 6

    // 1 2 3 ... 7
    // 1 ... 3 4 5 ...7
    // 1 ... 5 6 7

    // 1 2 3 ... 50
    // 1 ... 26 27 28 ... 50
    // 1 ... 48 49 50
    const renderPages = useMemo(() => {
        const totalPages = Math.ceil(totalCount / countPerPage);
        // Extremes remain constant
        // Middle part changes
        // If index is already present on view and not active, then use it
        // Else recalculate middle part
        return (
            <div style={{ display: 'flex', gap: 4 }}>
                <div>1</div>
                <div>{totalPages}</div>
            </div>
        );
    }, [pageIndex, countPerPage, totalCount]);

    return totalCount > 0 ? (
        <div style={{ display: 'flex', gap: 8 }}>
            <button>Prev</button>
            {renderPages}
            <button>Next</button>
        </div>
    ) : null;
};

export default Pagination;

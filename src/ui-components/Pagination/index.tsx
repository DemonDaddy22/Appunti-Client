import React, {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { ButtonOutlined } from '../Button';
import { createListOfSize, isValidNumber } from '../../utils';
import { ThemeContext } from '../../context/ThemeContext';
import { THEME_PRIMARY_ACCENT2, GREY_80 } from '../../resources/colors';
import { StyledPageButton, StyledPageButtonContainer } from './styles';
import classes from './styles.module.scss';

const Pagination: React.FC<IPagination> = (props) => {
    const {
        pageRange,
        pageIndex,
        countPerPage,
        totalCount,
        handlePageChange,
        style,
        buttonContainerStyle,
        buttonStyle,
    } = props;

    const { isLightTheme, getThemedValue } = useContext(ThemeContext);
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
            <StyledPageButtonContainer
                color={getThemedValue(THEME_PRIMARY_ACCENT2, GREY_80)}
                style={buttonContainerStyle}
            >
                {currPages.map((page) => (
                    <StyledPageButton
                        key={`page-${page}-of-${totalPages}`}
                        onClick={() => handlePageChange(page)}
                        style={buttonStyle}
                        color={getThemedValue(THEME_PRIMARY_ACCENT2, GREY_80)}
                        active={page === pageIndex}
                    >
                        {page}
                    </StyledPageButton>
                ))}
            </StyledPageButtonContainer>
        ),
        [isLightTheme, currPages, pageIndex, countPerPage, totalCount]
    );

    return totalCount > 0 ? (
        <div className={classes.paginationContainer} style={style}>
            <ButtonOutlined
                color={getThemedValue(THEME_PRIMARY_ACCENT2, GREY_80)}
                style={{ fontWeight: 'bold' }}
                disabled={pageIndex === 1}
                onClick={handlePrevButtonClick}
            >
                &lt;
            </ButtonOutlined>
            {renderPages}
            <ButtonOutlined
                color={getThemedValue(THEME_PRIMARY_ACCENT2, GREY_80)}
                style={{ fontWeight: 'bold' }}
                disabled={pageIndex === totalPages}
                onClick={handleNextButtonClick}
            >
                &gt;
            </ButtonOutlined>
        </div>
    ) : null;
};

export default Pagination;

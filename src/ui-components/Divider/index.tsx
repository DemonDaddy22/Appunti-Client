import React, { useCallback } from 'react';
import { DEFAULT_DASH_COUNT, MAX_DASH_COUNT } from '../../resources/constants';
import { createListOfSize } from '../../utils';
import classes from './styles.module.scss';

const Divider: React.FC<IDivider> = (props) => {
    const { numOfDashes, hideDivider, dashStyle, style, className } = props;

    const renderDashes = useCallback(
        (key: string) => {
            const placeholderList = createListOfSize(
                Math.min(numOfDashes || DEFAULT_DASH_COUNT, MAX_DASH_COUNT)
            );
            return (
                <>
                    {placeholderList.map((entry: number) => (
                        <div
                            key={`${key}-${entry}`}
                            className={classes.dash}
                            style={dashStyle}
                        />
                    ))}
                </>
            );
        },
        [numOfDashes, DEFAULT_DASH_COUNT]
    );

    return (
        <div
            className={`${classes.divider} ${className}`}
            style={{ ...style, opacity: hideDivider ? 0 : 1 }}
        >
            {renderDashes('left')}
            <div className={classes.dashMain} style={dashStyle} />
            {renderDashes('right')}
        </div>
    );
};

export default Divider;

Divider.defaultProps = {
    numOfDashes: 4,
    hideDivider: false,
};

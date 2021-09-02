import React from 'react';
import { INDIGO_600 } from '../../resources/colors';
import classes from './styles.module.scss';

const Tag: React.FC<ITag> = (props) => {
    const { label, color, backgroundColor = INDIGO_600, style } = props;

    return (
        <div
            className={classes.tag}
            style={{
                ...style,
                color,
                backgroundColor,
            }}
        >
            {label}
        </div>
    );
};

export default Tag;

Tag.defaultProps = { style: {} };

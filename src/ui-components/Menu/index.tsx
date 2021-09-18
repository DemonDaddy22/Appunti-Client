import React from 'react';
import classes from './styles.module.scss';

// TODO - try replacing with Downshift
const Menu: React.FC<IMenu> = (props) => {
    const { style, options, closeOnOptionSelect } = props;

    return (
        <div className={classes.menuContainer} style={style}>
            {options?.map((option) => (
                <div
                    key={option?.id}
                    className={classes.menuItem}
                    style={option?.style}
                    onClick={option?.onSelect}
                >
                    {option?.label}
                </div>
            ))}
        </div>
    );
};

export default Menu;

Menu.defaultProps = { closeOnOptionSelect: true };

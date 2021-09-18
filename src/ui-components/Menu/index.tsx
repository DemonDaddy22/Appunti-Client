import React from 'react';
import classes from './styles.module.scss';

// dynamically position the menu based on screen size and parent's position

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

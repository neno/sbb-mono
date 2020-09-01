import React from 'react';

const Button = ({
    children, handleClick, classes = [], attr = {},
}) => {
    const cls = ['a-btn', ...classes];

    return (
        <button
            type="button"
            onClick={handleClick}
            className={cls.join(' ')}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...attr}
        >
            {children}
        </button>
    );
};

export default Button;

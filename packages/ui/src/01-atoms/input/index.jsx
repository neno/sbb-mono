import React from 'react';

const Input = ({ classes = [], attr = {} }) => {
    const cls = ['a-input', ...classes];
    return (
        <input
            className={cls.join(' ')}
            type="text"
            required
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...attr}
        />
    );
};

export default Input;

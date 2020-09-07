import React from 'react';

const Input = ({ classes = [], attr = {}, type = 'text' }) => {
    const cls = ['a-input', ...classes];
    return (
        <input
            className={cls.join(' ')}
            type={type}
            required
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...attr}
        />
    );
};

export default Input;

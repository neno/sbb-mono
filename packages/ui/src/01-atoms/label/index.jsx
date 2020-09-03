import React from 'react';

const Label = ({ children, htmlFor, attr = {} }) => (
    <label
        className="a-label"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...attr}
        htmlFor={htmlFor}
    >
        {children}
    </label>
);

export default Label;

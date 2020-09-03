import React from 'react';

const Error = ({ children, attr = {} }) => (
    <p
        className="a-error"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...attr}
    >
        {children}
    </p>
);

export default Error;

import React from 'react';

const Box = ({ children, classes = [], attr = {} }) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={`a-box ${classes.join(' ')}`} {...attr}>
        <p>{children}</p>
    </div>
);

export default Box;

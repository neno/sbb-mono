import React, { ComponentProps } from 'react';

const Error: React.FC<ComponentProps<'p'>> = ({ children }) => (
    <p className="a-field-error">{children}</p>
);

export default Error;

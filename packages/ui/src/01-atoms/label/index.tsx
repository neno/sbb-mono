import React, { ComponentProps } from 'react';

interface Props extends ComponentProps<'label'> {
    htmlFor: string;
    classes?: string[];
}

const Label: React.FC<Props> = ({ children, classes = [], ...props }) => (
    <label
        htmlFor={props.htmlFor}
        className={['a-label', ...classes].join(' ')}
    >
        {children}
    </label>
);

export default Label;

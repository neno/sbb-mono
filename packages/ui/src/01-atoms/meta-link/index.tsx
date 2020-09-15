import React, { ComponentProps } from 'react';

interface Props extends ComponentProps<'a'> {
    classes?: string[];
}

const MetaLink: React.FC<Props> = ({ children, classes = [], href }) => {
    const CustomTag = href ? 'a' : 'button';
    return (
        <CustomTag
            href={href}
            className={['a-meta-link', ...classes].join(' ')}
        >
            {children}
        </CustomTag>
    );
};

export default MetaLink;

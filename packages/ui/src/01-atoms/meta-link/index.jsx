import React from 'react';

const MetaLink = ({
    children, url, classes = [], attr = {},
}) => {
    const cls = ['a-meta-link', ...classes];
    return (
        <a
            href={url}
            className={cls.join(' ')}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...attr}
        >
            {children}
        </a>
    );
};

export default MetaLink;

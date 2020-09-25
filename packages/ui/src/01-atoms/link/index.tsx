import React, { ComponentProps } from 'react';

import ArrowsCta from '../arrows-cta';

export interface ILink extends ComponentProps<'a'> {
    href: string;
    attrs?: {};
    classes?: string[];
    arrows?: boolean;
}

const Link: React.FC<ILink> = ({
    children, href, classes = [], attrs = {}, arrows,
}) => {
    const cls = ['a-link', ...classes];

    return (
        <a
            href={href}
            className={cls.join(' ')}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...attrs}
        >
            {arrows ? (
                <ArrowsCta>{children}</ArrowsCta>
            ) : children }
        </a>
    );
};

export default Link;

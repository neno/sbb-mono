import React, { ComponentProps } from 'react';

import Icon from '../icon';

export interface ILink extends ComponentProps<'a'> {
    href: string;
    attrs?: {};
    classes?: string[];
    arrows?: boolean;
}

const Link: React.FC<ILink> = ({
    children, href, classes = [], attrs = {}, arrows,
}) => {
    const cls = ['a-link', ...classes, arrows && 'a-link--arrows'];

    return (
        <a
            href={href}
            className={cls.join(' ')}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...attrs}
        >
            {arrows && <Icon name="arrow-right" />}
            {children}
            {arrows && <Icon name="arrow-right" />}
        </a>
    );
};

export default Link;

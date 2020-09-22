import React, { ComponentProps } from 'react';

import Icon from '../icon';

export interface ILink extends ComponentProps<'a'> {
    children: React.ReactNode;
    attrs?: {};
    url?: string;
    tag?: string;
    classes?: string[];
    arrows?: boolean;
}

const Link: React.FC<ILink> = ({
    children, tag, classes = [], url, attrs = {}, arrows,
}) => {
    const cls = ['a-link', ...classes];
    if (arrows) {
        cls.push('a-link__arrows');
    }
    const CustomTag = url ? 'a' : (tag || 'span');
    return (
        <CustomTag
            href={url}
            className={cls.join(' ')}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...attrs}
        >
            {arrows && <Icon name="arrow-right" />}
            {children}
            {arrows && <Icon name="arrow-right" />}
        </CustomTag>
    );
};

export default Link;

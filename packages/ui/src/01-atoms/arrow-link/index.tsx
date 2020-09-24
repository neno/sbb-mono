import React, { ComponentProps } from 'react';

import Icon from '../icon';

interface Props extends ComponentProps<'a'> {
    text?: string,
    tag?: string,
    classes?: string[];
}

const MetaLink: React.FC<Props> = ({
    text = 'More Information', tag, classes = [], href,
}) => {
    const CustomTag = tag || 'span';
    return (
        <CustomTag
            href={href}
            className={['a-arrow-link', ...classes].join(' ')}
        >
            <Icon name="arrow-right" />
            {text}
            <Icon name="arrow-right" />
        </CustomTag>
    );
};

export default MetaLink;

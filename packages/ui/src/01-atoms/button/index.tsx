import React, { ComponentProps } from 'react';
import Icon from '../icon';

interface Props extends ComponentProps<'button'> {
    handleClick?: () => void;
    classes?: string[];
    attrs?: {};
    url?: string;
    arrows?: boolean;
}

const Button: React.FC<Props> = ({
    children,
    handleClick,
    classes = [],
    attrs = {},
    type = 'button',
    url,
    arrows,
}) => {
    const cls = ['a-btn', ...classes];
    const CustomTag = url ? 'a' : 'button';
    return (
        <CustomTag
            onClick={handleClick}
            className={cls.join(' ')}
            type={type}
            href={url}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...attrs}
        >
            {arrows && <Icon name="arrow-right" />}
            {children}
            {arrows && <Icon name="arrow-right" />}
        </CustomTag>
    );
};

export default Button;

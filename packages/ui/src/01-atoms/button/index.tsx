import React, { ComponentProps } from 'react';
import ArrowsCta from '../arrows-cta';

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
            {arrows ? (
                <ArrowsCta>{children}</ArrowsCta>
            ) : children }
        </CustomTag>
    );
};

export default Button;

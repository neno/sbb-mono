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
            <svg
                focusable="false"
                aria-hidden="true"
                className="a-icon a-icon--use-stroke"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M4,12.4914 L19.49,12.4914 M16.3486,15.6404 L19.4906,12.4914 L16.3486,9.3504" />
            </svg>
            {children}
            <svg
                focusable="false"
                aria-hidden="true"
                className="a-icon a-icon--use-stroke"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M4,12.4914 L19.49,12.4914 M16.3486,15.6404 L19.4906,12.4914 L16.3486,9.3504" />
            </svg>
        </CustomTag>
    );
};

export default Button;

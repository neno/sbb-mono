import React, { ComponentProps } from 'react';

interface Props {
    classes?: string[];
    attrs?: ComponentProps<'div'>;
}

const Notification: React.FC<Props> = ({ children, classes = [], attrs = {} }) => {
    const cls = ['a-notification', ...classes];
    return (
        <div
            role="alert"
            className={cls.join(' ')}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...attrs}
        >
            {children}
        </div>
    );
};

export default Notification;

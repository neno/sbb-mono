import React from 'react';

const Notification = ({ children, classes = [], attr = {} }) => {
    const cls = ['a-notification', ...classes];
    return (
        <div
            role="alert"
            className={cls.join(' ')}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...attr}
        >
            {children}
        </div>
    );
};

export default Notification;

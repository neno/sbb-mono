import React from 'react';

interface Props {
    classes?: string[];
}

const Link: React.FC<Props> = ({
    children, classes = [],
}) => {
    const cls = ['a-lead', ...classes];

    return (
        <div
            className={cls.join(' ')}
        >
            { children }
        </div>
    );
};

export default Link;

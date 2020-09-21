import React from 'react';

export interface ILink {
    children: React.ReactNode;
    label?: string;
    href?:string;
    classes?: string[];
}

const Link: React.FC<ILink> = ({
    children, classes = [], href = '#',
}) => {
    const cls = ['a-link', ...classes];
    return (
        <a href={href} className={cls.join(' ')}>
            {children}
        </a>
    );
};

export default Link;

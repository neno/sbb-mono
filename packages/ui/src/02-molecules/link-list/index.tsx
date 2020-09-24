import React from 'react';
import Link, { ILink } from '../../01-atoms/link';

interface Props {
    links: ILink[];
    classes?: string[];
    linkClasses?:[];
}

const LinkList: React.FC<Props> = ({ links, classes = [], linkClasses }) => (
    <ul className={`m-link-list ${classes.join(' ')}`}>
        {links && links.map(link => (
            <li className="m-link-list__item" key={encodeURIComponent(link.label)}>
                <Link href={link.href} classes={linkClasses}>{link.label}</Link>
            </li>
        ))}
    </ul>
);

export default LinkList;

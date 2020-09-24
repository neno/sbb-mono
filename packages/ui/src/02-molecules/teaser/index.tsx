// eslint-disable react/jsx-props-no-spreading
import React from 'react';

import Image from '../../01-atoms/image';
import Link from '../../01-atoms/link';

interface Props {
    imageData: object[];
    hasLink: boolean;
    href?: string;
    classes?: string[];
    title?: string;
    text?: string;
}

const Teaser: React.FC<Props> = ({
    imageData, title, text, href = '#', classes = [], hasLink,
}) => {
    const cls = hasLink ? 'm-teaser m-teaser--has-link' : 'm-teaser';
    return (
        <article className={`${cls} ${classes.join(' ')}`}>
            <Image {...imageData} />
            <div className="m-teaser__body">
                {title && (
                    <a className="m-teaser__block-link" href={href}>
                        <h3 className="m-teaser__title">{title}</h3>
                    </a>
                )}
                {text && <p className="m-teaser__text">{text}</p>}
                {hasLink && <Link arrows>Mehr Info</Link>}
            </div>
        </article>
    );
};

export default Teaser;

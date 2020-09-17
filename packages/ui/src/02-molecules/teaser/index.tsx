/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Image from '../../01-atoms/image';

interface Props {
    url:string;
    imageData: object[];
    classes?: string[];
    title?: string;
    text?: string;
}

const Teaser: React.FC<Props> = ({
    imageData, title, text, url = '#', classes = [],
}) => (
    <a className={`m-teaser ${classes.join(' ')}`} href={url}>
        <Image {...imageData} />
        <div className="m-teaser__body">
            {title && <h3 className="m-teaser__title">{title}</h3>}
            {text && <p>{text}</p>}
        </div>
    </a>
);

export default Teaser;

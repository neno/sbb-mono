import React from 'react';

interface Props {
    src:string;
    dataSrc: string;
    dataSrcset: string;
    sizes?: string;
    alt?: string;
    classes?: string[];
}

const Image: React.FC<Props> = ({
    src,
    dataSrc,
    dataSrcset,
    sizes = '100vw',
    alt,
    classes = [],
}) => (
    <span className={`a-img ${classes.join(' ')}`}>
        <img
            data-image="image"
            data-src={dataSrc}
            data-srcset={dataSrcset}
            alt={alt}
            className="a-img__image"
            srcSet={dataSrcset}
            src={src}
            sizes={sizes}
        />
    </span>
);

export default Image;

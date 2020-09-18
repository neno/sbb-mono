import React from 'react';

interface Props {
    src:string;
    srcset: string;
    sizes?: string;
    alt?: string;
    classes?: string[];
}

const Image: React.FC<Props> = ({
    src,
    srcset,
    sizes = '100vw',
    alt,
    classes = [],
}) => (
    <span className={`a-img ${classes.join(' ')}`}>
        <img
            data-image="image"
            alt={alt}
            className="a-img__image"
            srcSet={srcset}
            src={src}
            sizes={sizes}
        />
    </span>
);

export default Image;

import React from 'react';

export interface ImageProps {
    src:string;
    width: number;
    height: number;
    srcset: string;
    sizes?: string;
    alt?: string;
    classes?: string[];
}

const Image: React.FC<ImageProps> = ({
    src,
    width,
    height,
    srcset,
    sizes = '100vw',
    alt,
    classes = [],
}) => (
    <span className={`a-img ${classes.join(' ')}`}>
        <img
            width={width}
            height={height}
            alt={alt}
            className="a-img__image"
            srcSet={srcset}
            src={src}
            sizes={sizes}
        />
    </span>
);

export default Image;

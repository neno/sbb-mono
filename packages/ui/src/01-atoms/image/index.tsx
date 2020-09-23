import React from 'react';

interface Props {
    src:string;
    width: number;
    height: number;
    srcset: string;
    sizes?: string;
    alt?: string;
    classes?: string[];
}

const Image: React.FC<Props> = ({
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

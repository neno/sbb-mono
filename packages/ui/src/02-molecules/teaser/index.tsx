import React from 'react';
import Image, { ImageProps } from '../../01-atoms/image';

interface Props {
    imageData: ImageProps;
    hasCTA: boolean;
    href?: string;
    classes?: string[];
    title?: string;
    text?: string;
}

const Teaser: React.FC<Props> = ({
    imageData, title, text, href = '#', classes = [], hasCTA,
}) => {
    const cls = hasCTA ? 'm-teaser m-teaser--cta' : 'm-teaser';
    return (
        <article className={`${cls} ${classes.join(' ')}`}>
            <Image
                src={imageData.src}
                srcset={imageData.srcset}
                width={imageData.width}
                height={imageData.height}
                sizes={imageData.sizes}
            />
            <div className="m-teaser__body">
                {title && (
                    <a className="m-teaser__block-link" href={href}>
                        <h3 className="m-teaser__title">{title}</h3>
                    </a>
                )}
                {text && <p className="m-teaser__text">{text}</p>}
                {hasCTA && <span className="m-teaser__more">Mehr Info</span>}
            </div>
        </article>
    );
};

export default Teaser;

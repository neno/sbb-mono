/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Image from '../../01-atoms/image';

interface Props {
    url:string;
    imageData: object[];
    cta: boolean;
    classes?: string[];
    title?: string;
    text?: string;
}

const Teaser: React.FC<Props> = ({
    imageData, title, text, url = '#', classes = [], cta,
}) => (
    <article className={`m-teaser ${classes.join(' ')}`}>
        <Image {...imageData} />
        <div className="m-teaser__body">
            {title && (
                cta
                    ? <h3 className="m-teaser__title">{title}</h3>
                    : (
                        <a className="m-teaser__block-link" href="url">
                            <h3 className="m-teaser__title">{title}</h3>

                        </a>
                    )

            )}
            {text && <p>{text}</p>}
            {cta && <p>Mehr Info</p>}
        </div>
    </article>
);

export default Teaser;

import React from 'react';

import AccordionBtn from '../../01-atoms/accordion-btn';
import AccordionPanel from '../../01-atoms/accordion-panel';

interface Props {
    id: string;
    title: string;
    children: React.ReactNode
}

const FooterSection: React.FC<Props> = ({ id, title, children }) => (
    <aside className="m-footer-section">
        <h3 className="m-footer-section__title">{title}</h3>
        <AccordionBtn classes={['a-accordion-btn--footer']} id={id}>{title}</AccordionBtn>
        <AccordionPanel classes={['a-accordion-panel--footer']} id={id}>
            <div className="m-footer-section__body">
                {children}
            </div>
        </AccordionPanel>
    </aside>
);

export default FooterSection;

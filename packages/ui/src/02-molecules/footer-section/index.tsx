import React from 'react';

interface Props {
    title: string;
    children: React.ReactNode
}

const FooterSection: React.FC<Props> = ({ title, children }) => (
    <aside className="m-footer-section">
        <h3 className="m-footer-section__title">{title}</h3>
        {children}
    </aside>
);

export default FooterSection;

/* eslint-disable react/no-danger */
import React from 'react';
import FooterToggler from '../../01-atoms/footer-toggler';
import FooterBottom from '../footer-bottom';
import FooterSections from '../footer-sections';

interface Props {
    title?: string;
    fixed?: boolean;
}

const togglerOptions = {
    animate: true,
    activeCls: 'a-footer-toggler--active',
    targetActiveCls: 'o-footer__toggable--active',
};

const Footer: React.FC<Props> = ({
    title = 'Kontakt und zusätzliche Informationen',
    fixed = false,
}) => (
    <footer className={fixed ? 'o-footer o-footer--fixed' : 'o-footer'} data-module="footer">
        <h2 className="u-sr-only">{title}</h2>
        {fixed ? (
            <>
                <FooterToggler
                    controls="footer-toggable"
                    text={`${title} Öffnen`}
                    options={togglerOptions}
                />
                <div className="o-footer__toggable" id="footer-toggable">
                    <div className="o-footer__sections-container">
                        <div className="l-constrainer">
                            <FooterSections />
                        </div>
                    </div>
                </div>
            </>
        ) : (
            <div className="o-footer__sections-container">
                <div className="l-constrainer">
                    <FooterSections />
                </div>
            </div>
        )}
        <FooterBottom />
    </footer>
);

export default Footer;

/* eslint-disable react/no-danger */
import React from 'react';
import Button from '../../01-atoms/button';
import Link from '../../01-atoms/link';
import LinkList from '../../02-molecules/link-list';
import FooterSection from '../../02-molecules/footer-section';
import { footerSectionData } from '../../02-molecules/footer-section/stories/footer-section.data';
import SocialLinks from '../../02-molecules/social-links';
import { socialLinks } from '../../02-molecules/social-links/stories/social-links.data';
import FooterToggler from '../../01-atoms/footer-toggler';

interface Props {
    title?: string;
    fixed?: boolean;
}

const togglerOptions = {
    animate: true,
    activeCls: 'a-footer-toggler--active',
    targetActiveCls: 'o-footer__footer-toggable--active',
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
                <div className="o-footer__footer-toggable" id="footer-toggable">
                    <div className="o-footer__sections-container">
                        <div className="l-constrainer">
                            <div className="o-footer__sections">
                                <FooterSection id="footer-contact" title="Kontakt">
                                    <Button url="#" classes={['a-btn--primary']} arrows>
                                        Kontakt
                                    </Button>
                                    <p>
                                        Haben Sie Fragen?Wir helfen Ihnen gerne.
                                        Bitte lesen Sie auch unsere Erklärung zum
                                        {' '}
                                        <Link url="#" classes={['a-link--footer']}>Datenschutz.</Link>
                                    </p>
                                </FooterSection>
                                <FooterSection id="footer-railinfo" title="Bahnverkehrsinformationen">
                                    <p>
                                        Informationen über die aktuelle Betriebslage und Störungen auf dem Schweizer Schienennetz und über wichtige Behinderungen und Streiks im Ausland.
                                    </p>
                                    <p>
                                        <Link url="#" classes={['a-link--footer']} arrows>
                                            Aktuelle Hinweise
                                        </Link>
                                    </p>
                                </FooterSection>
                                <FooterSection id="footer-social" title="Newsletter & Social Media">
                                    <p>Jeden Monat über Angebote und Neuigkeiten informiert sein.</p>
                                    <p>
                                        <Link url="#" classes={['a-link--footer']} arrows>
                                            Newsletter abonnieren
                                        </Link>
                                    </p>
                                    <SocialLinks socialLinks={socialLinks} />
                                </FooterSection>
                                <FooterSection id="footer-company" title={footerSectionData.title}>
                                    <LinkList
                                        links={footerSectionData.links}
                                        linkClasses={['a-link--footer']}
                                    />
                                </FooterSection>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ) : (
            <div className="o-footer__sections-container">
                <div className="l-constrainer">
                    <div className="o-footer__sections">
                        <FooterSection id="footer-contact" title="Kontakt">
                            <Button url="#" classes={['a-btn--primary']} arrows>
                                Kontakt
                            </Button>
                            <p>
                                Haben Sie Fragen? Wir helfen Ihnen gerne.
                                Bitte lesen Sie auch unsere Erklärung zum
                                {' '}
                                <Link url="#" classes={['a-link--footer']}>Datenschutz.</Link>
                            </p>
                        </FooterSection>
                        <FooterSection id="footer-railinfo" title="Bahnverkehrsinformationen">
                            <p>
                                Informationen über die aktuelle Betriebslage und Störungen auf dem Schweizer Schienennetz und über wichtige Behinderungen und Streiks im Ausland.
                            </p>
                            <p>
                                <Link url="#" classes={['a-link--footer']} arrows>
                                    Aktuelle Hinweise
                                </Link>
                            </p>
                        </FooterSection>
                        <FooterSection id="footer-social" title="Newsletter & Social Media">
                            <p>Jeden Monat über Angebote und Neuigkeiten informiert sein.</p>
                            <p>
                                <Link url="#" classes={['a-link--footer']} arrows>
                                    Newsletter abonnieren
                                </Link>
                            </p>
                            <SocialLinks socialLinks={socialLinks} />
                        </FooterSection>
                        <FooterSection id="footer-company" title={footerSectionData.title}>
                            <LinkList
                                links={footerSectionData.links}
                                linkClasses={['a-link--footer']}
                            />
                        </FooterSection>
                    </div>
                </div>
            </div>
        )}
    </footer>
);

export default Footer;

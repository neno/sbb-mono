/* eslint-disable react/no-danger */
import React from 'react';
import Button from '../../01-atoms/button';
import LinkList from '../../02-molecules/link-list';
import FooterSection from '../../02-molecules/footer-section';
import { footerSectionData } from '../../02-molecules/footer-section/stories/footer-section.data';
import SocialLinks from '../../02-molecules/social-links';
import { socialLinks } from '../../02-molecules/social-links/stories/social-links.data';

const Footer = () => (
    <footer id="footer" className="o-footer">
        <div className="o-footer__sections-container">
            <div className="l-constrainer">
                <div className="o-footer__sections">
                    <FooterSection title="Kontakt">
                        <Button classes={['a-btn--primary a-btn--arrows']} arrows>
                            Label
                        </Button>
                        <p>
                            Haben Sie Fragen? Wir helfen Ihnen gerne.
                            Bitte lesen Sie auch unsere Erklärung zum
                            <a href="#">Datenschutz.</a>
                        </p>
                    </FooterSection>
                    <FooterSection title="Bahnverkehrsinformationen">
                        <p>
                            Informationen über die aktuelle Betriebslage und Störungen auf dem Schweizer Schienennetz und über wichtige Behinderungen und Streiks im Ausland.
                        </p>
                        <p>
                            <a href="#">
                                Aktuelle Hinweise
                            </a>
                        </p>
                    </FooterSection>
                    <FooterSection title="Newsletter & Social Media">
                        <p>Jeden Monat über Angebote und Neuigkeiten informiert sein.</p>
                        <p>
                            <a href="#">
                                Newsletter abonnieren
                            </a>
                        </p>
                        <SocialLinks socialLinks={socialLinks} />
                    </FooterSection>
                    <FooterSection title={footerSectionData.title}>
                        <LinkList
                            links={footerSectionData.links}
                            linkClasses={['a-link--footer']}
                        />
                    </FooterSection>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;

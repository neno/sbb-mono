import React from 'react';

import Button from '../../01-atoms/button';
import Link from '../../01-atoms/link';
import LinkList from '../../02-molecules/link-list';
import FooterSection from '../../02-molecules/footer-section';
import SocialLinks from '../../02-molecules/social-links';

import { footerSectionData } from '../../02-molecules/footer-section/stories/footer-section.data';
import { socialLinks } from '../../02-molecules/social-links/stories/social-links.data';

const FooterSections = () => (

    <div className="o-footer-sections">
        <FooterSection id="footer-contact" title="Kontakt">
            <Button url="/" classes={['a-btn--footer']} arrows>
                Kontakt
            </Button>
            <p>
                Haben Sie Fragen?Wir helfen Ihnen gerne.
                Bitte lesen Sie auch unsere Erklärung zum
                {' '}
                <Link href="/" classes={['a-link--footer']}>Datenschutz.</Link>
            </p>
        </FooterSection>
        <FooterSection id="footer-railinfo" title="Bahnverkehrsinformationen">
            <p>
                Informationen über die aktuelle Betriebslage und Störungen auf dem Schweizer Schienennetz und über wichtige Behinderungen und Streiks im Ausland.
            </p>
            <p>
                <Link href="/" classes={['a-link--footer']} arrows>
                    Aktuelle Hinweise
                </Link>
            </p>
        </FooterSection>
        <FooterSection id="footer-social" title="Newsletter & Social Media">
            <p>Jeden Monat über Angebote und Neuigkeiten informiert sein.</p>
            <p>
                <Link href="/" classes={['a-link--footer']} arrows>
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

);

export default FooterSections;

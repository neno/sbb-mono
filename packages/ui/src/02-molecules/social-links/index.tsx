import React from 'react';
import SocialLink, { ISocialLink } from '../../01-atoms/social-link';

interface Props {
    socialLinks: ISocialLink[];
    classes?: string[];
}

const SocialLinks: React.FC<Props> = ({ socialLinks, classes = [] }) => (
    <ul className={`m-social-links ${classes.join(' ')}`}>
        {socialLinks && socialLinks.map(link => (
            <li className="m-social-links__item" key={encodeURIComponent(link.label)}>
                <SocialLink icon={link.icon} label={link.label} />
            </li>
        ))}
    </ul>
);

export default SocialLinks;

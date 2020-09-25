import React from 'react';
import Icon from '../icon';

export interface ISocialLink {
    icon: string,
    label: string;
    href?:string;
    classes?: string[];
}

const SocialLink: React.FC<ISocialLink> = ({
    icon, label, classes = [], href = '#',
}) => {
    const cls = ['a-social-link', ...classes];
    const newWindowText = 'Link öffnet in neuem Fenster.';
    return (
        <a href={href} className={cls.join(' ')} rel="external noopener nofollow noreferrer" target="_blank">
            <Icon name={icon} />
            <span className="u-sr-only">
                {label}
                {' '}
                {newWindowText}
            </span>
        </a>
    );
};

export default SocialLink;

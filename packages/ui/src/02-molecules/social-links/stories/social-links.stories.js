/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import SocialLinks from '../index';
import { socialLinks } from './social-links.data';

export default {
    title: '02-Molecules/Social Links',
};

export const Default = () => renderToStaticMarkup(
    <SocialLinks
        socialLinks={socialLinks}
    />,
);

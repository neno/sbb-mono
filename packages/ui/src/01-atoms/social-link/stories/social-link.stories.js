/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import SocialLink from '../index';

export default {
    title: '01-Atoms/Social Links',
};

export const Facebook = () => renderToStaticMarkup(<SocialLink icon="facebook" label="Die Facebook-Seite der SBB anzeigen." />);

export const Twitter = () => renderToStaticMarkup(<SocialLink icon="twitter" label="Hier geht's zum Twitter-Account der SBB." />);

export const Youtube = () => renderToStaticMarkup(<SocialLink icon="youtube" label="Hier geht's zum YouTube-Kanal der SBB." />);

export const Instagram = () => renderToStaticMarkup(<SocialLink icon="instagram" label="Hier geht's zum Instagram-Account der SBB." />);

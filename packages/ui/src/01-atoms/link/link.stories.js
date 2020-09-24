/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Link from './index';

export default {
    title: '01-Atoms/Links',
};

export const Standard = () => renderToStaticMarkup(<Link href="/">Das ist ein inline Link</Link>);

export const FooterLink = ({ label = 'Footer Link' }) => renderToStaticMarkup(<Link href="/" classes={['a-link--footer']}>{label}</Link>);

export const ArrowsLink = () => renderToStaticMarkup(
    <Link href="/" arrows>More information</Link>,
);

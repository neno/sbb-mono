/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import MetaLink from './index';
import Icon from '../icon';

export default {
    title: '01-Atoms/Meta Link',
};

export const Default = () => renderToStaticMarkup(
    <MetaLink href="/">
        Sbb.ch
    </MetaLink>,
);

export const MetaLinkWithIcon = () => renderToStaticMarkup(
    <MetaLink href="/">
        <Icon name="magnifying-glass" />
        Suche
    </MetaLink>,
);

export const MetaLinkLanguageSelector = () => renderToStaticMarkup(
    <MetaLink>
        <Icon name="globe" />
        Deutsch
        <Icon name="chevron-down" />
    </MetaLink>,
);

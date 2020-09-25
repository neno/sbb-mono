/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import LinkList from '../index';
import { links } from './link-list.data';

export default {
    title: '02-Molecules/Link List',
};

export const FooterQuickLinks = () => renderToStaticMarkup(
    <LinkList
        links={links.quicklinks}
        linkClasses={['a-link--footer']}
    />,
);

export const FooterBottom = () => renderToStaticMarkup(
    <LinkList
        classes={['m-link-list--footer-bottom']}
        links={links.footerBottomLinks}
        linkClasses={['a-link--footer-bottom']}
    />,
);

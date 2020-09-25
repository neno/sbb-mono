/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import FooterSection from '../index';
import LinkList from '../../link-list';
import { footerSectionData } from './footer-section.data';

export default {
    title: '02-Molecules/Footer Section',
};

export const QuickLinks = () => renderToStaticMarkup(
    <FooterSection
        title={footerSectionData.title}
    >
        <LinkList
            links={footerSectionData.links}
            linkClasses={['a-link--footer']}
        />
    </FooterSection>,
);

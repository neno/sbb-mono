/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import FooterSections from './index';

export default {
    title: '03-Organisms/Footer Sections',
};

export const Default = () => renderToStaticMarkup(
    <FooterSections />,
);

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import FooterToggle from './index';

export default {
    title: '01-Atoms/Footer Toggle',
};

export const Default = () => renderToStaticMarkup(
    <FooterToggle controls="default" text="Some text" />,
);

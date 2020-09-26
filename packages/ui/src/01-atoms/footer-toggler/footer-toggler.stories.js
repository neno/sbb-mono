/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import FooterToggler from './index';

export default {
    title: '01-Atoms/Footer Toggler',
};

export const Default = () => renderToStaticMarkup(
    <FooterToggler controls="default" text="Some text" />,
);

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import FooterBottom from '../index';

export default {
    title: '03-Organisms/Footer Bottom',
};

export const Default = () => renderToStaticMarkup(
    <FooterBottom />,
);

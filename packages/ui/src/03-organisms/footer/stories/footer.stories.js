/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Footer from '../index';

export default {
    title: '03-Organisms/Footer',
};

export const Desktop = () => renderToStaticMarkup(<Footer />);

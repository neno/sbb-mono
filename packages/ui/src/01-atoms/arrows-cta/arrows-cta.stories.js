/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ArrowsCta from './index';

export default {
    title: '01-Atoms/Arrows CTA',
};

export const Default = () => renderToStaticMarkup(
    <ArrowsCta>More Information</ArrowsCta>,
);

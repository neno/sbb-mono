/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ArrowLink from './index';

export default {
    title: '01-Atoms/Arrow Link',
};

export const Default = () => renderToStaticMarkup(
    <ArrowLink />,
);

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Error from './index';

export default {
    title: '01-Atoms/Error',
};

export const Default = () => renderToStaticMarkup(
    <Error htmlFor="field_name">
        Error Text
    </Error>,
);

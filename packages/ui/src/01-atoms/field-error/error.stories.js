/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import FieldError from './index';

export default {
    title: '01-Atoms/Field Error',
};

export const Default = () => renderToStaticMarkup(
    <FieldError>
        Error Text
    </FieldError>,
);

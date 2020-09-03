/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Label from './index';

export default {
    title: '01-Atoms/Label',
};

export const Default = () => renderToStaticMarkup(
    <Label htmlFor="field_name">
        Label Text
    </Label>,
);

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Tab from './index';

export default {
    title: '01-Atoms/Tab',
};

export const Default = () => renderToStaticMarkup(
    <Tab label="Label" id="tab-1" />,
);

export const Active = () => renderToStaticMarkup(
    <Tab label="Label" id="tab-1" active="true">
        Label
    </Tab>,
);

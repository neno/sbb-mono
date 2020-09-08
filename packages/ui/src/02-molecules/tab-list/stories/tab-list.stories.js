/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import TabList from '../index';

import { tabs } from './tab-list.data';

export default {
    title: '02-Molecules/Tab List',
};

export const Default = () => renderToStaticMarkup(
    <TabList tabs={tabs} label="Example of tab list" />,
);

export const Centered = () => renderToStaticMarkup(
    <TabList tabs={tabs} label="Example of tab list" isCentered="true" />,
);

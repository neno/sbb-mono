/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import FixedFooter from './index';

export default {
    title: '04-Templates/Fixed Footer',
};

export const Template = () => renderToStaticMarkup(<FixedFooter />);

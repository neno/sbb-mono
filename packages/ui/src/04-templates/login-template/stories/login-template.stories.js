/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import LoginTemplate from '../index';

export default {
    title: '04-Templates/Login Template',
};

export const Template = () => renderToStaticMarkup(<LoginTemplate />);

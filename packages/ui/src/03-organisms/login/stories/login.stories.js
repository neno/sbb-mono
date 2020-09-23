/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Login from '../index';

export default {
    title: '03-Organisms/Login',
};

export const Template = () => renderToStaticMarkup(<Login />);

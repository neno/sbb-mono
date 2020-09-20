/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Image from '../index';
import { imageData } from './image.data';

export default {
    title: '01-Atoms/Image',
};

export const Default = () => renderToStaticMarkup(
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Image {...imageData} />,
);

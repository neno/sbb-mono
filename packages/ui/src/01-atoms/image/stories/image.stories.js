/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Image from '../index';
import { imageData } from './image.data';

export default {
    title: '01-Atoms/Images',
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const image = () => renderToStaticMarkup(<Image {...imageData} />);

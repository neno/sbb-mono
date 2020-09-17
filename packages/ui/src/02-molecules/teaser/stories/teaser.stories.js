/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Teaser from '../index';
import { teaserData } from './teaser.data';

export default {
    title: '02-Molecules/Teaser',
};

export const Default = () => renderToStaticMarkup(<Teaser title={teaserData.title} imageData={teaserData.image} />);

export const Centered = () => renderToStaticMarkup(<Teaser title={teaserData.title} imageData={teaserData.image} classes={['m-teaser--centered']} />);

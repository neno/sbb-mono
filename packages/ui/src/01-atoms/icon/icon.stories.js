/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Icon from './index';

export default {
    title: '01-Atoms/Icons',
};

export const ArrowRight = () => renderToStaticMarkup(<Icon name="arrow-right" />);

export const ArrowUpCircle = () => renderToStaticMarkup(<Icon name="arrow-up-circle" />);

export const Checkmark = () => renderToStaticMarkup(<Icon name="checkmark" />);

export const ChevronDown = () => renderToStaticMarkup(<Icon name="chevron-down" />);

export const Globe = () => renderToStaticMarkup(<Icon name="globe" />);

export const MagnifyingGlass = () => renderToStaticMarkup(<Icon name="magnifying-glass" />);

export const SignExclamationPoint = () => renderToStaticMarkup(<Icon name="sign-exclamation-point" />);

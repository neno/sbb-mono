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

export const Cross = () => renderToStaticMarkup(<Icon name="cross" />);

export const Facebook = () => renderToStaticMarkup(<Icon name="facebook" />);

export const Globe = () => renderToStaticMarkup(<Icon name="globe" />);

export const Instagram = () => renderToStaticMarkup(<Icon name="instagram" />);

export const MagnifyingGlass = () => renderToStaticMarkup(<Icon name="magnifying-glass" />);

export const Minus = () => renderToStaticMarkup(<Icon name="minus" />);

export const Plus = () => renderToStaticMarkup(<Icon name="plus" />);

export const SignExclamationPoint = () => renderToStaticMarkup(<Icon name="sign-exclamation-point" />);

export const Twitter = () => renderToStaticMarkup(<Icon name="twitter" />);

export const Youtube = () => renderToStaticMarkup(<Icon name="youtube" />);

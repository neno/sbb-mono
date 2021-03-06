/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import AccordionBtn from './index';

export default {
    title: '01-Atoms/Accordion Button',
};

export const Default = () => renderToStaticMarkup(
    <AccordionBtn id="default">Some text</AccordionBtn>,
);

export const Footer = () => renderToStaticMarkup(
    <AccordionBtn id="footer" classes={['a-accordion-btn--footer']}>Some text</AccordionBtn>,
);

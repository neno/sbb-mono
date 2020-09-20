/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Radiobutton from '../index';

export default {
    title: '01-Atoms/Radiobutton',
};

const handleChange = id => {
    // eslint-disable-next-line no-console
    console.log(id);
};

export const Default = () => renderToStaticMarkup(
    <Radiobutton id="radio-1" name="radio-1" checked={false} handleChange={handleChange} />,
);

export const Checked = () => renderToStaticMarkup(
    <Radiobutton id="radio-2" name="radio-2" checked handleChange={handleChange} />,
);

export const Disabled = () => renderToStaticMarkup(
    <Radiobutton id="radio-2" name="radio-2" disabled handleChange={handleChange} />,
);

export const DisabledChecked = () => renderToStaticMarkup(
    <Radiobutton id="radio-2" name="radio-2" disabled checked handleChange={handleChange} />,
);

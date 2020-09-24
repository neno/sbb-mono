/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import RadioButton from '../index';

export default {
    title: '02-Molecules/Form Fields/Radio Button',
};

const handleChange = id => {
    // eslint-disable-next-line no-console
    console.log(id);
};

export const Default = () => renderToStaticMarkup(
    <RadioButton id="radiobutton-1" name="radiobutton-1" label="Default" checked={false} handleChange={handleChange} />,
);

export const Checked = () => renderToStaticMarkup(
    <RadioButton id="radiobutton-2" name="radiobutton-2" label="Checked" checked handleChange={handleChange} />,
);

export const Disabled = () => renderToStaticMarkup(
    <RadioButton id="radiobutton-3" name="radiobutton-3" label="Disabled" disabled handleChange={handleChange} />,
);

export const CheckedDisabled = () => renderToStaticMarkup(
    <RadioButton id="radiobutton-4" name="radiobutton-4" label="Checked disabled" checked disabled handleChange={handleChange} />,
);

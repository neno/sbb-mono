/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Checkbox from '../index';

export default {
    title: '01-Atoms/Checkbox',
};

const handleChange = id => {
    // eslint-disable-next-line no-console
    console.log(id);
};

export const Default = () => renderToStaticMarkup(
    <Checkbox id="checkbox-1" name="checkbox-1" checked={false} handleChange={handleChange} />,
);

export const Checked = () => renderToStaticMarkup(
    <Checkbox id="checkbox-2" name="checkbox-2" checked handleChange={handleChange} />,
);

export const Disabled = () => renderToStaticMarkup(
    <Checkbox id="checkbox-2" name="checkbox-2" disabled handleChange={handleChange} />,
);

export const CheckedDisabled = () => renderToStaticMarkup(
    <Checkbox id="checkbox-2" name="checkbox-2" checked disabled handleChange={handleChange} />,
);

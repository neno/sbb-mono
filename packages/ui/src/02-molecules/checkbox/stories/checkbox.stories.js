/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Checkbox from '../index';

export default {
    title: '02-Molecules/Form Fields/Checkbox',
};

const handleChange = id => {
    // eslint-disable-next-line no-console
    console.log(id);
};

export const Default = () => renderToStaticMarkup(
    <Checkbox id="checkbox-1" name="checkbox-1" label="Default" checked={false} disabled={false} handleChange={handleChange} />,
);

export const Checked = () => renderToStaticMarkup(
    <Checkbox id="checkbox-2" name="checkbox-2" label="Checked" checked disabled={false} handleChange={handleChange} />,
);

export const Disabled = () => renderToStaticMarkup(
    <Checkbox id="checkbox-3" name="checkbox-3" label="Disabled" checked={false} disabled handleChange={handleChange} />,
);

export const CheckedDisabled = () => renderToStaticMarkup(
    <Checkbox id="checkbox-4" name="checkbox-4" label="Checked disabled" checked disabled handleChange={handleChange} />,
);

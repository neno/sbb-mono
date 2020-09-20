/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import CheckboxField from '../index';

export default {
    title: '02-Molecules/Form Fields/Checkbox Field',
};

const handleChange = id => {
    // eslint-disable-next-line no-console
    console.log(id);
};

export const Default = () => renderToStaticMarkup(
    <CheckboxField id="checkbox-1" name="checkbox-1" label="Default" checked={false} handleChange={handleChange} />,
);

export const Checked = () => renderToStaticMarkup(
    <CheckboxField id="checkbox-2" name="checkbox-2" label="Checked" checked handleChange={handleChange} />,
);

export const Disabled = () => renderToStaticMarkup(
    <CheckboxField id="checkbox-3" name="checkbox-3" label="Disabled" disabled handleChange={handleChange} />,
);

export const CheckedDisabled = () => renderToStaticMarkup(
    <CheckboxField id="checkbox-4" name="checkbox-4" label="Checked disabled" checked disabled handleChange={handleChange} />,
);

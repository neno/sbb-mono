/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Input from './index';

export default {
    title: '01-Atoms/Input',
};

export const InputDefault = () => renderToStaticMarkup(
    <Input
        name="field-1"
        id="field-1"
        attrs={{
            value: 'Value',
            required: true,
        }}
    />,
);

export const InputPlaceholder = () => renderToStaticMarkup(
    <Input
        name="field-2"
        id="field-2"
        attrs={{
            placeholder: 'Placeholder Text',
        }}
    />,
);

export const InputDisabled = () => renderToStaticMarkup(
    <Input
        name="field-3"
        id="field-3"
        attrs={{
            value: 'Value',
            disabled: true,
        }}
    />,
);

export const InputError = () => renderToStaticMarkup(
    <Input
        name="field-4"
        id="field-4"
        classes={['a-input--error']}
        attr={{
            value: 'Value',
        }}
    />,
);

/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import TextInput from './index';

export default {
    title: '01-Atoms/Text Input',
};

const handleInputChange = event => {
    // eslint-disable-next-line no-console
    console.log(event);
};

export const Default = () => renderToStaticMarkup(
    <TextInput
        name="field-1"
        id="field-1"
        attrs={{
            value: 'Value',
            onChange: handleInputChange,
            required: true,
        }}
    />,
);

export const Placeholder = () => renderToStaticMarkup(
    <TextInput
        name="field-2"
        id="field-2"
        attrs={{
            placeholder: 'Placeholder Text',
            onChange: handleInputChange,
        }}
    />,
);

export const Disabled = () => renderToStaticMarkup(
    <TextInput
        name="field-3"
        id="field-3"
        attrs={{
            value: 'Value',
            disabled: true,
            onChange: handleInputChange,
        }}
    />,
);

export const Error = () => renderToStaticMarkup(
    <TextInput
        name="field-4"
        id="field-4"
        classes={['a-input--error']}
        attr={{
            value: 'Value',
            onChange: handleInputChange,
        }}
    />,
);

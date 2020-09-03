/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Input from './index';

export default {
    title: '01-Atoms/Input',
};

export const InputDefault = () => renderToStaticMarkup(
    <Input attr={{
        value: 'Value',
    }}
    />,
);

export const InputPlaceholder = () => renderToStaticMarkup(
    <Input attr={{
        placeholder: 'Placeholder Text',
    }}
    />,
);

export const InputDisabled = () => renderToStaticMarkup(
    <Input attr={{
        value: 'Value',
        disabled: true,
    }}
    />,
);

export const InputError = () => renderToStaticMarkup(
    <Input
        classes={['a-input--error']}
        attr={{
            value: 'Value',
        }}
    />,
);

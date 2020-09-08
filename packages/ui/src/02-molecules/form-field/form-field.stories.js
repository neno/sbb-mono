/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import FormField from './index';

import Label from '../../01-atoms/label';
import Input from '../../01-atoms/input';
import Error from '../../01-atoms/error';

export default {
    title: '02-Molecules/Form Field',
};

export const Default = () => renderToStaticMarkup(
    <FormField>
        <Label htmlFor="field_name">
            Label Text
        </Label>
        <Input
            attr={{
                id: 'field_name',
                name: 'field_name',
            }}
        />
    </FormField>,
);

export const Optional = () => renderToStaticMarkup(
    <FormField>
        <Label htmlFor="field_name">
            Label Text (optional)
        </Label>
        <Input
            attr={{
                id: 'field_name',
                name: 'field_name',
            }}
        />
    </FormField>,
);

export const HasError = () => renderToStaticMarkup(
    <FormField>
        <Label htmlFor="field_name">
            Label Text
        </Label>
        <Input
            classes={['a-input--error']}
            attr={{
                id: 'field_name',
                name: 'field_name',
            }}
        />
        <Error>
            Pflichtfeld, bitte ausfüllen.
        </Error>
    </FormField>,
);

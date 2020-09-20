/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import FormField from './index';

import Label from '../../01-atoms/label';
import Input from '../../01-atoms/input';
import FieldError from '../../01-atoms/field-error';

export default {
    title: '02-Molecules/Form Fields/Text Field',
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
        <FieldError>
            Pflichtfeld, bitte ausfüllen.
        </FieldError>
    </FormField>,
);

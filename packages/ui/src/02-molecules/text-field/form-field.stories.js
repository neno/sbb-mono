/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import TextField from './index';

import Label from '../../01-atoms/label';
import TextInput from '../../01-atoms/text-input';
import FieldError from '../../01-atoms/field-error';

export default {
    title: '02-Molecules/Form Fields/Text Field',
};

export const Default = () => renderToStaticMarkup(
    <TextField>
        <Label htmlFor="field_name">
            Label Text
        </Label>
        <TextInput
            attr={{
                id: 'field_name',
                name: 'field_name',
            }}
        />
    </TextField>,
);

export const Optional = () => renderToStaticMarkup(
    <TextField>
        <Label htmlFor="field_name">
            Label Text (optional)
        </Label>
        <TextInput
            attr={{
                id: 'field_name',
                name: 'field_name',
            }}
        />
    </TextField>,
);

export const HasError = () => renderToStaticMarkup(
    <TextField>
        <Label htmlFor="field_name">
            Label Text
        </Label>
        <TextInput
            classes={['a-input--error']}
            attr={{
                id: 'field_name',
                name: 'field_name',
            }}
        />
        <FieldError>
            Pflichtfeld, bitte ausfüllen.
        </FieldError>
    </TextField>,
);

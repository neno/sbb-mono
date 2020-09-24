/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import RadioButtonList from '../index';

export default {
    title: '02-Molecules/Form Fields/Radio Button List',
};

const handleChange = id => {
    // eslint-disable-next-line no-console
    console.log(id);
};

const items = [
    {
        id: 'checkbox-1', name: 'checkbox-1', label: 'Option 1', handleChange,
    },
    {
        id: 'checkbox-2', name: 'checkbox-2', label: 'Option 2', checked: true, handleChange,
    },
    {
        id: 'checkbox-3', name: 'checkbox-3', label: 'Option 3', handleChange,
    },
    {
        id: 'checkbox-4', name: 'checkbox-4', label: 'Option 4', handleChange,
    },

];

export const Default = () => renderToStaticMarkup(
    <RadioButtonList items={items} />,
);

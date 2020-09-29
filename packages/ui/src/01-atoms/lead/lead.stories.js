/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Lead from './index';

export default {
    title: '01-Atoms/Lead',
};

export const Default = () => renderToStaticMarkup(
    <Lead htmlFor="field_name">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet nam repellat, dolor reprehenderit corrupti
            necessitatibus iure expedita fuga quia, laborum labore
            sint qui dicta, repellendus perspiciatis sapiente id iste illo!
        </p>
    </Lead>,
);

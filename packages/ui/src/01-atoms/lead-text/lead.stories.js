/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import LeadText from './index';

export default {
    title: '01-Atoms/Lead Text',
};

export const Default = () => renderToStaticMarkup(
    <LeadText>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet nam repellat, dolor reprehenderit corrupti
            necessitatibus iure expedita fuga quia, laborum labore
            sint qui dicta, repellendus perspiciatis sapiente id iste illo!
        </p>
    </LeadText>,
);

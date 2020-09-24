/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ButtonGroup from './index';

import Button from '../../01-atoms/button';

export default {
    title: '02-Molecules/Button Group',
};

export const Default = () => renderToStaticMarkup(
    <ButtonGroup>
        <Button arrows classes={['a-btn--arrows']}>Default Button</Button>
        <Button arrows classes={['a-btn--primary a-btn--arrows']}>Primary Button</Button>
    </ButtonGroup>,
);

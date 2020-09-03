/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Collapsible from '../index';
import { boxData } from '../../box/stories/box.data';
import Button from '../../button';
import Box from '../../box';

export default {
    title: '01-Atoms/Collapsibles',
};

export const CollapsibleTriggerTarget = () => renderToStaticMarkup(
    <Collapsible triggerSelector=".a-btn" targetSelector=".a-box">
        <Button classes={['a-btn--primary']}>
            <span>Show/Hide</span>
        </Button>
        <Box attr={{ 'aria-hidden': 'true' }}>{boxData}</Box>
    </Collapsible>,
);

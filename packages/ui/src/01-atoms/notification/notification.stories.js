/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Notification from './index';

import Icon from '../icon';

export default {
    title: '01-Atoms/Notification',
};

export const Default = () => renderToStaticMarkup(
    <Notification>
        <Icon name="magnifying-glass" />
        <div className="a-notification__text">
            Notification Text
        </div>
    </Notification>,
);

export const Error = () => renderToStaticMarkup(
    <Notification classes={['a-notification--error']}>
        <Icon name="sign-exclamation-point" />
        <div className="a-notification__text">
            <strong>Notification Title</strong>
            <ul className="a-notification__error-list">
                <li><a href="#field-1">Input field 1</a></li>
                <li><a href="#field-2">Input field 2</a></li>
            </ul>
        </div>
    </Notification>,
);

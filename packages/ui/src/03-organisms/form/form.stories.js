/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Form from './index';

import TextField from '../../02-molecules/text-field';

import Label from '../../01-atoms/label';
import Icon from '../../01-atoms/icon';
import TextInput from '../../01-atoms/text-input';
import FieldError from '../../01-atoms/field-error';
import Button from '../../01-atoms/button';
import Notification from '../../01-atoms/notification';

export default {
    title: '03-Organisms/Form',
};

const module = 'form-validation';
const handleSubmit = event => {
    event.preventDefault();
};

export const Default = () => renderToStaticMarkup(
    <Form module={module} handleSubmit={handleSubmit}>
        <ol className="o-form__list">
            <li className="o-form__list-item">
                <TextField>
                    <Label htmlFor="firstname">
                        First Name
                    </Label>
                    <TextInput
                        attr={{
                            id: 'firstname',
                            name: 'firstname',
                            'data-error-message-required': 'Custom error for missing text',
                        }}
                    />
                </TextField>
            </li>
            <li className="o-form__list-item">
                <TextField>
                    <Label htmlFor="lastname">
                        Last Name
                    </Label>
                    <TextInput
                        attr={{
                            id: 'lastname',
                            name: 'lastname',
                        }}
                    />
                </TextField>
            </li>
            <li className="o-form__list-item">
                <TextField>
                    <Label htmlFor="email">
                        Email
                    </Label>
                    <TextInput
                        type="email"
                        attr={{
                            id: 'email',
                            name: 'email',
                            'data-error-message-type-mismatch': 'Custom error for type mismatch',
                        }}
                    />
                </TextField>
            </li>
        </ol>
        <div className="o-form__footer">
            <Button classes={['a-btn--primary a-btn--arrows']} type="submit">
                <Icon name="arrow-right" />
                Submit
                <Icon name="arrow-right" />
            </Button>
        </div>
    </Form>,
);

export const Invalid = () => renderToStaticMarkup(
    <Form module={module} handleSubmit={handleSubmit}>
        <div className="o-form__notification">
            <Notification classes={['a-notification--error']}>
                <Icon name="sign-exclamation-point" />
                <div className="a-notification__text">
                    <strong>Notification Title</strong>
                    <ul className="a-notification__error-list">
                        <li><a href="#firstname">First Name</a></li>
                        <li><a href="#lastname">Last Name</a></li>
                    </ul>
                </div>
            </Notification>
        </div>
        <ol className="o-form__list">
            <li className="o-form__list-item">
                <TextField>
                    <Label htmlFor="firstname">
                        First Name
                    </Label>
                    <TextInput
                        classes={['a-input--error']}
                        attr={{
                            id: 'firstname',
                            name: 'firstname',
                        }}
                    />
                    <FieldError>
                        Pflichtfeld, bitte ausfüllen.
                    </FieldError>
                </TextField>
            </li>
            <li className="o-form__list-item">
                <TextField>
                    <Label htmlFor="lastname">
                        Last Name
                    </Label>
                    <TextInput
                        classes={['a-input--error']}
                        attr={{
                            id: 'lastname',
                            name: 'lastname',
                        }}
                    />
                    <FieldError>
                        Pflichtfeld, bitte ausfüllen.
                    </FieldError>
                </TextField>
            </li>
        </ol>
        <div className="o-form__footer">
            <Button classes={['a-btn--primary a-btn--arrows']} type="submit">
                <Icon name="arrow-right" />
                Submit
                <Icon name="arrow-right" />
            </Button>
        </div>
    </Form>,
);

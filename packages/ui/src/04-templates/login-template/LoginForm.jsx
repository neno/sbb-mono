import React from 'react';
import Form from '../../03-organisms/form';

import FormField from '../../02-molecules/form-field';

import Label from '../../01-atoms/label';
import Input from '../../01-atoms/input';
import Button from '../../01-atoms/button';

const LoginForm = () => (
    <Form>
        <ol className="o-form__list">
            <li className="o-form__list-item">
                <FormField>
                    <Label htmlFor="benutzername">Benutzername</Label>
                    <Input
                        attr={{
                            id: 'benutzername',
                            name: 'benutzername',
                        }}
                    />
                </FormField>
            </li>
            <li className="o-form__list-item">
                <FormField>
                    <Label htmlFor="passwort">Passwort</Label>
                    <Input
                        attr={{
                            id: 'passwort',
                            name: 'passwort',
                        }}
                    />
                </FormField>
            </li>
        </ol>
        <div className="o-form__footer u-text-center">
            <Button classes={['a-btn--primary a-btn--arrows']} arrows="true" type="submit">
                Login
            </Button>
        </div>
    </Form>
);

export default LoginForm;

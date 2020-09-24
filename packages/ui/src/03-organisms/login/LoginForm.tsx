import React, { ComponentProps } from 'react';
import Form from '../form';

import FormField, { IFormField } from '../../02-molecules/text-field';

import Label from '../../01-atoms/label';
import TextInput from '../../01-atoms/text-input';
import Button from '../../01-atoms/button';

export interface LoginFormProps extends ComponentProps<'form'> {
    username: IFormField;
    password: IFormField;
}

const LoginForm: React.FC<LoginFormProps> = ({ username, password }) => (
    <Form>
        <ol className="o-form__list">
            <li className="o-form__list-item">
                <FormField>
                    <Label htmlFor={username.id}>{username.label}</Label>
                    <TextInput
                        required
                        id={username.id}
                        name={username.name}
                    />
                </FormField>
            </li>
            <li className="o-form__list-item">
                <FormField>
                    <Label htmlFor={password.id}>{password.label}</Label>
                    <TextInput
                        required
                        id={password.id}
                        name={password.name}
                    />
                </FormField>
            </li>
        </ol>
        <div className="o-form__footer u-text-center">
            <Button classes={['a-btn--primary']} arrows type="submit">
                Login
            </Button>
        </div>
    </Form>
);

export default LoginForm;

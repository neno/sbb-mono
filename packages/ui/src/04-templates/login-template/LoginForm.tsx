import React, { ComponentProps } from 'react';
import Form from '../../03-organisms/form';

import FormField, { IFormField } from '../../02-molecules/form-field';

import Label from '../../01-atoms/label';
import Input from '../../01-atoms/input';
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
                    <Input
                        id={username.id}
                        name={username.name}
                    />
                </FormField>
            </li>
            <li className="o-form__list-item">
                <FormField>
                    <Label htmlFor={password.id}>{password.label}</Label>
                    <Input
                        id={password.id}
                        name={password.name}
                    />
                </FormField>
            </li>
        </ol>
        <div className="o-form__footer u-text-center">
            <Button classes={['a-btn--primary a-btn--arrows']} arrows type="submit">
                Login
            </Button>
        </div>
    </Form>
);

export default LoginForm;

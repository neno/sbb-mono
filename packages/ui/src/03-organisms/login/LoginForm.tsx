import React, { ComponentProps } from 'react';
import Form from '../form';

import TextField, { ITextField } from '../../02-molecules/text-field';

import Label from '../../01-atoms/label';
import TextInput from '../../01-atoms/text-input';
import Button from '../../01-atoms/button';

export interface LoginFormProps extends ComponentProps<'form'> {
    username: ITextField;
    password: ITextField;
}

const LoginForm: React.FC<LoginFormProps> = ({ username, password }) => (
    <Form>
        <ol className="o-form__list">
            <li className="o-form__list-item">
                <TextField>
                    <Label htmlFor={username.id}>{username.label}</Label>
                    <TextInput
                        required
                        id={username.id}
                        name={username.name}
                    />
                </TextField>
            </li>
            <li className="o-form__list-item">
                <TextField>
                    <Label htmlFor={password.id}>{password.label}</Label>
                    <TextInput
                        required
                        id={password.id}
                        name={password.name}
                    />
                </TextField>
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

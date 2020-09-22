/* eslint-disable import/prefer-default-export */
import { FormEventHandler } from 'react';
import { LoginFormProps } from '../LoginForm';
import { ITab } from '../../../01-atoms/tab';

export const tabs: ITab[] = [
    {
        label: 'Mitarbeitende',
        id: 'mitarbeitende',
        active: true,
    },
    {
        label: 'Pensionierte',
        id: 'pensionierte',
        active: false,
    },
];

export const loginTemplateData: LoginFormProps = {
    username: {
        id: 'benutzername',
        name: 'benutzername',
        label: 'Benutzername',
    },
    password: {
        id: 'passwort',
        name: 'passwort',
        label: 'Passwort',
    },
};

export const handleSubmit: FormEventHandler = event => {
    event.preventDefault();
};

import React from 'react';

export interface IFormField {
    id: string;
    name: string;
    label: string;
}

const FormField: React.FC<{}> = ({ children }) => (
    <div className="m-form-field">
        {children}
    </div>
);

export default FormField;

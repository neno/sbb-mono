import React from 'react';

export interface ITextField {
    id: string;
    name: string;
    label: string;
}

const TextField: React.FC<{}> = ({ children }) => (
    <div className="m-text-field">
        {children}
    </div>
);

export default TextField;

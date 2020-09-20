import React from 'react';
import Label from '../../01-atoms/label';
import Radiobutton from '../../01-atoms/radiobutton';

interface RadiobuttonFieldProps {
    id: string;
    name: string;
    handleChange: (id: string) => void;
    checked: boolean;
    disabled: boolean;
    label: string;
    htmlFor: string;
    classes?: string[];
}

interface Props {
    items: RadiobuttonFieldProps[]
}

const CheckboxField:React.FC<Props> = ({
    items = [],
}) => (
    <div className="m-radiobutton-field">
        <ol>
            {items.map(item => (
                <li key={item.id}>
                    <Label htmlFor={item.htmlFor}>
                        <Radiobutton
                            name={item.name}
                            id={item.id}
                            checked={item.checked}
                            handleChange={item.handleChange}
                            disabled={item.disabled}
                        />
                        {item.label}
                    </Label>
                </li>
            ))}
        </ol>
    </div>
);

export default CheckboxField;

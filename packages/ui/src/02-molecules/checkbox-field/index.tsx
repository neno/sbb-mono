import React from 'react';
import Label from '../../01-atoms/label';
import Checkbox from '../../01-atoms/checkbox';

interface Props {
    id: string;
    name: string;
    handleChange: (id: string) => void;
    checked: boolean;
    disabled: boolean;
    label: string;
    htmlFor: string;
    classes?: string[];
}

const CheckboxField:React.FC<Props> = ({
    id, name, handleChange, checked, disabled, label, htmlFor, classes = [],
}) => (
    <div className={['m-checkbox-field', ...classes].join(' ')}>
        <Label htmlFor={htmlFor}>
            <Checkbox
                name={name}
                id={id}
                checked={checked}
                handleChange={handleChange}
                disabled={disabled}
            />
            {label}
        </Label>
    </div>
);

export default CheckboxField;

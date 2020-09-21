import React from 'react';
import Label from '../../01-atoms/label';
import RadioButton from '../../01-atoms/radio-button';

export interface RadioButtonProps {
    id: string;
    name: string;
    handleChange: (id: string) => void;
    checked: boolean;
    disabled: boolean;
    label: string;
    classes?: string[];
}

const RadioButtonField:React.FC<RadioButtonProps> = ({
    id, name, handleChange, checked, disabled, label, classes = [],
}) => (
    <div className={['m-radio-button-field', ...classes].join(' ')}>
        <Label htmlFor={id}>
            <RadioButton
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

export default RadioButtonField;

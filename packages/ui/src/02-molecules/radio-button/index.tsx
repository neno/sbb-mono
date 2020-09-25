import React, { ChangeEvent } from 'react';
import Label from '../../01-atoms/label';

export interface RadioButtonProps {
    id: string;
    name: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
    disabled: boolean;
    label: string;
    classes?: string[];
}

const RadioButton:React.FC<RadioButtonProps> = ({
    id, name, handleChange, checked, disabled, label, classes = [],
}) => (
    <div className={['m-radio-button', ...classes].join(' ')}>
        <input
            className="m-radio-button__input"
            type="radio"
            name={name}
            id={id}
            checked={!!checked}
            onChange={handleChange}
            disabled={!!disabled}
        />
        <Label htmlFor={id} classes={['m-radio-button__label']}>
            {label}
        </Label>
    </div>
);

export default RadioButton;

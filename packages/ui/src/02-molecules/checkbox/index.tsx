// import React, { ChangeEvent } from 'react';
import React, { SyntheticEvent } from 'react';
import Icon from '../../01-atoms/icon';
import Label from '../../01-atoms/label';

interface Props {
    id: string;
    name: string;
    handleChange: (event: SyntheticEvent<HTMLInputElement>) => void;
    checked: boolean;
    disabled: boolean;
    label: string;
    classes?: string[];
}

const Checkbox:React.FC<Props> = ({
    id, name, handleChange, checked, disabled, label, classes = [],
}) => {
    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === ' ') {
            handleChange(event);
        }
    };

    return (
        <div className={['m-checkbox', ...classes].join(' ')}>
            <input
                className="m-checkbox__input"
                type="checkbox"
                name={name}
                id={id}
                checked={!!checked}
                onChange={handleChange}
                disabled={!!disabled}
                onKeyUp={handleKeyUp}
            />
            <Label htmlFor={id} classes={['m-checkbox__label']}>
                <Icon name="checkmark" />
                {label}
            </Label>
        </div>
    );
};

export default Checkbox;

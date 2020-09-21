import React from 'react';
import Icon from '../icon';

interface Props {
    id: string;
    name: string;
    handleChange: (id: string) => void;
    checked: boolean;
    disabled: boolean;
}

const Checkbox:React.FC<Props> = ({
    id, name, handleChange, checked = false, disabled = false,
}) => {
    const baseCls = 'a-checkbox';
    const cls = [baseCls];
    if (checked) {
        cls.push(`${baseCls}--checked`);
    }
    if (disabled) {
        cls.push(`${baseCls}--disabled`);
    }
    return (
        <div className={cls.join(' ')}>
            <input
                className="a-checkbox__input"
                type="checkbox"
                name={name}
                id={id}
                checked={checked}
                onChange={() => handleChange(id)}
                disabled={disabled}
            />
            <Icon name="checkmark" />
        </div>
    );
};

export default Checkbox;

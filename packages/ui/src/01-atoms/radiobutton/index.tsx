import React from 'react';

interface Props {
    id: string;
    name: string;
    handleChange: (id: string) => void;
    checked: boolean;
    disabled: boolean;
}

const Radiobutton:React.FC<Props> = ({
    id, name, handleChange, checked = false, disabled = false,
}) => {
    const baseCls = 'a-radiobutton';
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
                className="a-radiobutton__input"
                type="radio"
                name={name}
                id={id}
                checked={checked}
                onChange={() => handleChange(id)}
                disabled={disabled}
            />
        </div>
    );
};

export default Radiobutton;

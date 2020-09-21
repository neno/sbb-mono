import React from 'react';
import RadioButtonField, { RadioButtonProps } from '../radio-button-field';

interface Props {
    items: RadioButtonProps[]
}

const RadioButtonList:React.FC<Props> = ({
    items = [],
}) => (
    <div className="m-radio-button-list">
        <ol className="m-radio-button-list__list">
            {items.map(item => (
                <li key={item.id}>
                    <RadioButtonField
                        id={item.id}
                        name={item.name}
                        checked={item.checked}
                        handleChange={item.handleChange}
                        disabled={item.disabled}
                        label={item.label}
                    />
                </li>
            ))}
        </ol>
    </div>
);

export default RadioButtonList;

import React from 'react';
import RadioButton, { RadioButtonProps } from '../radio-button';

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
                    <RadioButton
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

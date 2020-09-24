import React, { ComponentProps } from 'react';

interface Props extends ComponentProps<'input'> {
    name: string;
    id: string;
    required?: boolean;
    classes?: string[];
    attrs?: ComponentProps<'input'>
}

const Input: React.FC<Props> = ({
    classes = [],
    attrs,
    ...props
}) => {
    const cls = ['a-text-input', ...classes];
    return (
        <input
            name={props.name}
            id={props.id}
            required={props.required}
            className={cls.join(' ')}
            type={attrs && attrs.type ? attrs.type : 'text'}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...attrs}
        />
    );
};

export default Input;

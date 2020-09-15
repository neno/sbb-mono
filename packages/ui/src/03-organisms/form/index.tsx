import React, { ComponentProps } from 'react';

interface Props extends ComponentProps<'form'> {
    module?: string;
    handleSubmit?: () => void;
}

const Form: React.FC<Props> = ({ children, module, handleSubmit }) => (
    <form className="o-form" data-module={module} onSubmit={handleSubmit}>
        {children}
    </form>
);

export default Form;

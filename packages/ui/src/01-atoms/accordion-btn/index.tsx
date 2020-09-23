import React, { ComponentProps } from 'react';
import Icon from '../icon';

interface Props extends ComponentProps<'button'> {
    id: string;
    classes?: string[];
    attrs?: {};
    url?: string;
    arrows?: boolean;
    expanded?: boolean;
}

const AccordionBtn: React.FC<Props> = ({
    id,
    children,
    expanded = false,
    classes = [],
    attrs = {},
}) => (
    <button
        className={`a-accordion-btn ${classes.join(' ')}`}
        type="button"
        aria-controls={`accordion-panel-${id}`}
        aria-expanded={expanded}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...attrs}
    >
        {children}

        <span className="a-accordion-btn__icon-plus">
            <Icon name="plus" />
        </span>

        <span className="a-accordion-btn__icon-minus">
            <Icon name="minus" />
        </span>
    </button>
);

export default AccordionBtn;

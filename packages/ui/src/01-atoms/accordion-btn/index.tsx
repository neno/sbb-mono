import React, { ComponentProps } from 'react';
import Icon from '../icon';

interface Props extends ComponentProps<'button'> {
    id: string;
    classes?: string[];
    attrs?: {};
    url?: string;
    active?: boolean;
    arrows?: boolean;
}

const AccordionBtn: React.FC<Props> = ({
    id,
    active,
    children,
    classes = [],
    attrs = {},
}) => {
    const cls = active ? 'a-accordion-btn a-accordion-btn--active' : 'a-accordion-btn';
    return (

        <button
            className={`${cls} ${classes.join(' ')}`}
            type="button"
            aria-controls={`accordion-panel-${id}`}
            aria-expanded={active}
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
};

export default AccordionBtn;

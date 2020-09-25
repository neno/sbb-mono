import React from 'react';

interface Props {
    id: string;
    labelledby?: string;
    active?: boolean;
    classes?: string[];
}

const AccordionPanel: React.FC<Props> = ({
    children, id, labelledby, active, classes = [],
}) => {
    const cls = active ? 'a-accordion-panel a-accordion-panel--active' : 'a-accordion-panel';
    return (
        <div
            aria-hidden={!active}
            id={`accordion-panel-${id}`}
            aria-labelledby={labelledby}
            className={`${cls} ${classes.join(' ')}`}
        >
            {children}
        </div>
    );
};

export default AccordionPanel;

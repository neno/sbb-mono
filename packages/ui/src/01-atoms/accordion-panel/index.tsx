import React from 'react';

interface Props {
    id: string;
    active?: boolean;
    classes?: string[];
}

const TabPanel: React.FC<Props> = ({
    children, id, active, classes = [],
}) => {
    const cls = active ? 'a-accordion-panel a-accordion-panel--active' : 'a-accordion-panel';
    return (
        <div
            id={`accordion-panel-${id}`}
            aria-labelledby={id}
            className={`${cls} ${classes.join(' ')}`}
        >
            {children}
        </div>
    );
};

export default TabPanel;

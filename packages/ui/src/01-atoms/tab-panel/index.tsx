import React from 'react';

interface Props {
    id: string;
    active: boolean;
}

const TabPanel: React.FC<Props> = ({ children, id, active }) => (
    <div
        tabIndex={0}
        role="tabpanel"
        id={`${id}-tab`}
        aria-labelledby={id}
        className={active ? 'a-tab-panel a-tab-panel--active' : 'a-tab-panel'}
    >
        {children}
    </div>
);

export default TabPanel;

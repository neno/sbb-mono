import React from 'react';

const TabPanel = ({ children, id, active }) => (
    <div
        tabIndex="0"
        role="tabpanel"
        id={`${id}-tab`}
        aria-labelledby={id}
        className={active ? 'a-tab-panel a-tab-panel--active' : 'a-tab-panel'}
    >
        {children}
    </div>
);

export default TabPanel;

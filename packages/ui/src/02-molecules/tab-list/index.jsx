import React from 'react';
import Tab from '../../01-atoms/tab';

const TabList = ({ label, tabs }) => (
    <div className="m-tablist" role="tablist" aria-label={label}>
        {tabs.map(tab => (
            <Tab key={tab.id} id={tab.id} label={tab.label} active={tab.active} />
        ))}
    </div>
);

export default TabList;

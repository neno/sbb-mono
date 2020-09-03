import React from 'react';
import TabList from '../../02-molecules/tab-list';

const Tabs = ({ children, tabs, label }) => (
    <div
        className="o-tabs"
        data-module="tabs"
    >
        <TabList tabs={tabs} label={label} />
        {children}
    </div>
);

export default Tabs;

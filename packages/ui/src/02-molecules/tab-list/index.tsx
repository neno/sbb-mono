import React from 'react';
import Tab, { ITab } from '../../01-atoms/tab';

interface Props {
    label: string;
    tabs: ITab[];
    isCentered?: boolean;
}

const TabList: React.FC<Props> = ({ label, tabs, isCentered }) => (
    <div className={`m-tablist${isCentered ? ' u-text-center' : ''}`} role="tablist" aria-label={label}>
        {tabs.map(tab => (
            <Tab key={tab.id} id={tab.id} label={tab.label} active={tab.active} />
        ))}
    </div>
);

export default TabList;

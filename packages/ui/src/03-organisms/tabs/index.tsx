import React from 'react';
import TabList from '../../02-molecules/tab-list';
import { ITab } from '../../01-atoms/tab';

interface Props {
    tabs: ITab[];
    label?: string;
    module?: string;
    classes?: string[];
    isTabListCentered?: boolean;
}

const Tabs: React.FC<Props> = ({
    children, tabs, label, module = 'tabs', classes = [], isTabListCentered,
}) => (
    <div
        className={['o-tabs', ...classes].join(' ')}
        data-module={module}
    >
        <TabList tabs={tabs} label={label} isCentered={isTabListCentered} />
        {children}
    </div>
);

export default Tabs;

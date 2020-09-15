import React from 'react';
import TabList from '../../02-molecules/tab-list';
import { ITab } from '../../01-atoms/tab';

interface Props {
    tabs: ITab[];
    label?: string;
    module?: string;
    classes?: string[]
}

const Tabs: React.FC<Props> = ({
    children, tabs, label, module = 'tabs', classes = [],
}) => (
    <div
        className={['o-tabs', ...classes].join(' ')}
        data-module={module}
    >
        <TabList tabs={tabs} label={label} />
        {children}
    </div>
);

export default Tabs;

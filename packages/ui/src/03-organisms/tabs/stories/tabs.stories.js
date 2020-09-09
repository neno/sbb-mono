/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Tabs from '../index';
import TabPanel from '../../../01-atoms/tab-panel/index';
import { tabs, tabPanels } from './tabs.data';

export default {
    title: '03-Organisms/Tabs',
};

export const Default = () => renderToStaticMarkup(
    <Tabs tabs={tabs} label="Example of tabs">
        {tabs.map((tab, index) => (
            <TabPanel key={tab.id} id={tab.id} active={tab.active}>
                {tabPanels[index]}
            </TabPanel>
        ))}
    </Tabs>,
);

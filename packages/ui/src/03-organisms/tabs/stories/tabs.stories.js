/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Tabs from '../index';

import TabPanel from '../../../01-atoms/tab-panel/index';

const tabs = [
    {
        label: 'Label 1',
        id: 'label-1',
        active: 'true',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero illo delectus atque praesentium, iusto distinctio saepe. In vitae repellat inventore nulla officia veniam animi veritatis?',
    },
    {
        label: 'Label 2',
        id: 'label-2',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quisquam? Magni maxime suscipit dolorem similique maiores tenetur sed ipsa, animi adipisci earum laudantium rem. Rerum soluta architecto enim consequatur corporis.',
    },
    {
        label: 'Label 3',
        id: 'label-3',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus praesentium tempore quo eveniet dolor! Nesciunt est explicabo deserunt nemo minima perferendis omnis consectetur iste hic perspiciatis assumenda, nihil, incidunt culpa! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus praesentium tempore quo eveniet dolor! Nesciunt est explicabo deserunt nemo minima perferendis omnis consectetur iste hic perspiciatis assumenda, nihil, incidunt culpa!',
    },
    {
        label: 'Label 4',
        id: 'label-4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam incidunt exercitationem odit consequuntur commodi deleniti in iste nihil magnam illo, id dolor, voluptate fugit asperiores, quibusdam nesciunt facere obcaecati itaque?',
    },
];

export default {
    title: '03-Organisms/Tabs',
};

export const Default = () => renderToStaticMarkup(
    <Tabs tabs={tabs} label="Example of tabs">
        {tabs.map(tab => (
            <TabPanel key={tab.id} id={tab.id} active={tab.active}>
                <p>
                    {tab.content}
                </p>
            </TabPanel>
        ))}
    </Tabs>,
);

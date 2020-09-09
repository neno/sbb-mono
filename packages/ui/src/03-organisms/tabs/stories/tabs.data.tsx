/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ITab } from '../../../01-atoms/tab';

export const tabs: ITab[] = [
    {
        label: 'Label 1',
        id: 'label-1',
        active: true,
    },
    {
        label: 'Label 2',
        id: 'label-2',
        active: false,
    },
    {
        label: 'Label 3',
        id: 'label-3',
        active: false,
    },
    {
        label: 'Label 4',
        id: 'label-4',
        active: false,
    },
];

const TabContent1: React.FC<{}> = () => (
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero illo delectus atque praesentium, iusto distinctio saepe. In vitae repellat inventore nulla officia veniam animi veritatis?</p>
);

const TabContent2: React.FC<{}> = () => (
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, quisquam? Magni maxime suscipit dolorem similique maiores tenetur sed ipsa, animi adipisci earum laudantium rem. Rerum soluta architecto enim consequatur corporis.</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam incidunt exercitationem odit consequuntur commodi deleniti in iste nihil magnam illo, id dolor, voluptate fugit asperiores, quibusdam nesciunt facere obcaecati itaque</p>
    </div>
);

const TabContent3: React.FC<{}> = () => (
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus praesentium tempore quo eveniet dolor! Nesciunt est explicabo deserunt nemo minima perferendis omnis consectetur iste hic perspiciatis assumenda, nihil, incidunt culpa! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus praesentium tempore quo eveniet dolor! Nesciunt est explicabo deserunt nemo minima perferendis omnis consectetur iste hic perspiciatis assumenda, nihil, incidunt culpa!</p>
);

const TabContent4: React.FC<{}> = () => (
    <div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero illo delectus atque praesentium, iusto distinctio saepe. In vitae repellat inventore nulla officia veniam animi veritatis</p>
        <p>
            Nam incidunt exercitationem odit consequuntur commodi
            <a href="http://www.sbb.ch">deleniti in iste nihil</a>
            magnam illo, id dolor, voluptate fugit asperiores, quibusdam nesciunt facere obcaecati itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit.

        </p>
    </div>
);

export const tabPanels: React.ReactNode[] = [<TabContent1 />, <TabContent2 />, <TabContent3 />, <TabContent4 />];

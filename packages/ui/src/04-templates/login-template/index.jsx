import React from 'react';
import Layout from '../layout';

import TabPanel from '../../01-atoms/tab-panel';
import Button from '../../01-atoms/button';

import LoginForm from './LoginForm';
import Tabs from '../../03-organisms/tabs';

const tabs = [
    {
        label: 'Mitarbeitende',
        id: 'mitarbeitende',
        active: 'true',
    },
    {
        label: 'Pensionierte',
        id: 'pensionierte',
    },
];

const OverviewTemplate = () => (
    <Layout classes={['t-template--overview']}>
        <div className="l-divider-big u-text-center">
            <h1>Login</h1>
        </div>
        <Tabs tabs={tabs} tabsListCentered="true">
            <TabPanel id="mitarbeitende" active="true">
                <Button classes={['a-btn--primary a-btn--arrows']} arrows="true" url="/">
                    Login
                </Button>
            </TabPanel>
            <TabPanel id="pensionierte">
                <LoginForm />
            </TabPanel>
        </Tabs>

        <div className="u-text-center">
            <p>Probleme beim Login?</p>
            <p>
                ICT Service Desk
                <br />
                Tel. 051 220 30 40
                <br />
                <a href="mailto:ict.servicedesk@sbb.ch">ict.servicedesk@sbb.ch</a>
            </p>
        </div>
    </Layout>
);

export default OverviewTemplate;

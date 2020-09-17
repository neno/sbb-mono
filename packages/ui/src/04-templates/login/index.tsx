import React from 'react';
import Layout from '../layout';

import TabPanel from '../../01-atoms/tab-panel';
import Button from '../../01-atoms/button';

import LoginForm from './LoginForm';
import Tabs from '../../03-organisms/tabs';
import { tabs, loginTemplateData } from './stories/login.data';

const OverviewTemplate = () => (
    <Layout classes={['t-login']}>
        <div>
            <h1>Login</h1>
        </div>
        <div className="l-divider-big">
            <Tabs tabs={tabs} isTabListCentered>
                <TabPanel id="mitarbeitende" active>
                    <div className="l-login-panel">
                        <Button classes={['a-btn--primary a-btn--arrows']} arrows url="/">
                            Login
                        </Button>
                    </div>
                </TabPanel>
                <TabPanel id="pensionierte" active={false}>
                    <div className="l-login-panel">
                        <p>
                            Pensionierte melden sich mit den gleichen
                            Anmeldeninformationen an, die sie auch auf
                            www.sbb.ch/benefit benutzen.
                        </p>
                        <div className="l-divider-small">
                            <LoginForm username={loginTemplateData.username} password={loginTemplateData.password} />
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
        <div className="l-divider-medium">
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

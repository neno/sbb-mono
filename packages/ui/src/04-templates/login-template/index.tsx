import React from 'react';
import Layout from '../layout';

import TabPanel from '../../01-atoms/tab-panel';
import Button from '../../01-atoms/button';

import LoginForm from './LoginForm';
import Tabs from '../../03-organisms/tabs';
import { tabs, loginTemplateData } from './stories/login-template.data';

const OverviewTemplate = () => (
    <Layout classes={['t-template--overview']}>
        <div className="l-divider-big u-text-center">
            <h1>Login</h1>
        </div>
        <div className="l-divider-medium">
            <Tabs tabs={tabs} isTabListCentered>
                <TabPanel id="mitarbeitende" active>
                    <div className="u-text-center">
                        <Button classes={['a-btn--primary a-btn--arrows']} arrows url="/">
                            Login
                        </Button>
                    </div>
                </TabPanel>
                <TabPanel id="pensionierte" active={false}>
                    <div className="l-login-panel">
                        <div className="u-text-center">
                            <p>
                                Pensionierte melden sich mit den gleichen
                                Anmeldeninformationen an, die sie auch auf
                                www.sbb.ch/benefit benutzen.
                            </p>
                        </div>
                        <LoginForm username={loginTemplateData.username} password={loginTemplateData.password} />
                    </div>
                </TabPanel>
            </Tabs>
        </div>
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

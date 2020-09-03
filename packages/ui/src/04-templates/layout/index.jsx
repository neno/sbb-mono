import React from 'react';

const Layout = ({ classes, children }) => (
    <div className={`t-template ${classes.join(' ')}`}>
        <main id="main">{children}</main>
    </div>
);

export default Layout;

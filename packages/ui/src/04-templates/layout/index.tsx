import React from 'react';

interface Props {
    classes?: string[]
}

const Layout: React.FC<Props> = ({ classes, children }) => (
    <div className={[...classes].join(' ')}>
        <main id="main">{children}</main>
    </div>
);

export default Layout;

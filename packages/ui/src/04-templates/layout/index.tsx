import React from 'react';

import Footer from '../../03-organisms/footer';

interface Props {
    classes?: string[]
}

const Layout: React.FC<Props> = ({ classes, children }) => (
    <div className={[...classes].join(' ')}>
        <main id="main">{children}</main>
        <Footer fixed />
    </div>
);

export default Layout;

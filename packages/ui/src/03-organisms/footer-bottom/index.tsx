import React from 'react';

import { links } from '../../02-molecules/link-list/stories/link-list.data';
import LinkList from '../../02-molecules/link-list';

const FooterBottom = () => (
    <div className="o-footer-bottom">
        <div className="l-constrainer">
            <LinkList
                classes={['m-link-list--footer-bottom']}
                links={links.footerBottomLinks}
                linkClasses={['a-link--footer-bottom']}
            />
        </div>
    </div>
);

export default FooterBottom;

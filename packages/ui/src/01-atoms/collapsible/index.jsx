import React from 'react';

const Collapsible = ({
    children,
    triggerSelector,
    targetSelector,
    classes = [],
}) => (
    <div
        className={`a-collapsible ${classes.join(' ')}`}
        data-module="collapsible"
        data-collapsible-options={JSON.stringify({
            triggerSelector,
            targetSelector,
        })}
    >
        {children}
    </div>
);

export default Collapsible;

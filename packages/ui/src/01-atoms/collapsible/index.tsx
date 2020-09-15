import React from 'react';

interface Props {
    children: React.ReactNode;
    triggerSelector: string;
    targetSelector: string;
    classes?: string[];
}

const Collapsible: React.FC<Props> = ({
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

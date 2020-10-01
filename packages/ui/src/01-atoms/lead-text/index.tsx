import React from 'react';

interface Props {
    classes?: string[];
}

const LeadText: React.FC<Props> = ({ children, classes = [] }) => {
    const cls = ['a-lead-text', ...classes];

    return <div className={cls.join(' ')}>{children}</div>;
};

export default LeadText;

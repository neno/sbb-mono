import React from 'react';
import Icon from '../icon';

interface Props {
    classes?: string[];
}

const AccordionPanel: React.FC<Props> = ({
    children, classes = [],
}) => (
    <span className={`a-arrows-cta ${classes.join(' ')}`}>
        <Icon name="arrow-right" />
        {children}
        <Icon name="arrow-right" />
    </span>
);

export default AccordionPanel;

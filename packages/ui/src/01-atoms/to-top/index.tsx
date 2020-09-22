import React from 'react';
import Icon from '../icon';
import Button from '../button';

interface Props {
    label: string;
}

const ToTop: React.FC<Props> = ({ label }) => (
    <Button classes={['a-btn--to-top']} attrs={{ 'data-module': 'to-top' }}>
        <span className="u-sr-only">{label}</span>
        <Icon name="arrow-up-circle" />
    </Button>
);

export default ToTop;

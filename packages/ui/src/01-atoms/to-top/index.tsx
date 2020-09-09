import React from 'react';
import Icon from '../icon';
import Button from '../button';

interface Props {
    label: string;
}

const ToTop: React.FC<Props> = ({ label }) => (
    <Button classes={['a-btn--to-top']} attrs={{ 'data-module': 'to-top' }}>
        <span className="a-btn__inner">
            <span className="sr-only">{label}</span>
            <Icon name="arrow-up-circle" />
        </span>
    </Button>
);

// const ToTop3: React.FC<Props> = ({ label }) => (
//     <Button classes={['a-btn--to-top']} attrs={{ 'data-module': 'to-top' }}>
//         <span className="sr-only">{label}</span>
//         <Icon name="arrow-up-circle" />
//     </Button>
// );

// const ToTop2: React.FC<{}> = () => (
//     <button type="button" className="plf-to-top" data-module="to-top">
//         <span className="sr-only">Nach Oben</span>
//         <Icon name="arrow-up-circle" />
//     </button>
// );

export default ToTop;

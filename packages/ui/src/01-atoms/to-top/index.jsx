import React from 'react';
import Icon from '../icon';

const ToTop = () => (
    <button type="button" className="plf-to-top" data-module="to-top">
        <span className="u-sr-only">Nach Oben</span>
        <Icon name="arrow-up-circle" />
    </button>
);

export default ToTop;

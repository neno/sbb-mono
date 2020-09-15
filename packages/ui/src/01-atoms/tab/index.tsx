import React from 'react';

export interface ITab {
    id: string;
    label: string;
    active: boolean;
}

const Tab: React.FC<ITab> = ({ label, id, active = false }) => (
    <button
        role="tab"
        type="button"
        aria-selected={active}
        className={active ? 'a-tab a-tab--active' : 'a-tab'}
        id={id}
        tabIndex={active ? 0 : -1}
        aria-controls={`${id}-tab`}
        data-panel={`${id}-tab`}
    >
        {label}
    </button>
);

export default Tab;

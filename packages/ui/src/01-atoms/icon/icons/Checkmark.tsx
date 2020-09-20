import React from 'react';

const Checkmark: React.FC = () => (
    <svg
        focusable="false"
        aria-hidden="true"
        className="a-icon a-icon--use-stroke"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <polyline fill="none" stroke="#000" points="6 15 10 19 19 10.01" />
    </svg>
);

export default Checkmark;

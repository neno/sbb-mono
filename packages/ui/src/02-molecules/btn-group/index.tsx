import React from 'react';

interface Props {
    children: React.ReactNode
}

const ButtonGroup:React.FC<Props> = ({
    children,
}) => (
    <div className="m-btn-group">
        {children}
    </div>
);

export default ButtonGroup;

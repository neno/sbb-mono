import React from 'react';

import ArrowRight from './icons/ArrowRight';
import ArrowUpCircle from './icons/ArrowUpCircle';
import Checkmark from './icons/Checkmark';
import ChevronDown from './icons/ChevronDown';
import Cross from './icons/Cross';
import Globe from './icons/Globe';
import MagnifyingGlass from './icons/MagnifyingGlass';
import SignExclamationPoint from './icons/SignExclamationPoint';

const icons = {
    'arrow-right': ArrowRight,
    'arrow-up-circle': ArrowUpCircle,
    checkmark: Checkmark,
    'chevron-down': ChevronDown,
    cross: Cross,
    globe: Globe,
    'magnifying-glass': MagnifyingGlass,
    'sign-exclamation-point': SignExclamationPoint,
};

const Icon: React.FC<{ name: string }> = ({ name }) => {
    const Ico = icons[name];
    return <Ico />;
};

export default Icon;

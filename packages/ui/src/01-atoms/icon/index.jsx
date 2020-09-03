import React from 'react';

import ArrowRight from './icons/arrow-right';
import ArrowUpCircle from './icons/arrow-up-circle';
import ChevronDown from './icons/chevron-down';
import Globe from './icons/globe';
import MagnifyingGlass from './icons/magnifying-glass';
import SignExclamationPoint from './icons/sign-exclamation-point';

const icons = {
    'arrow-right': ArrowRight,
    'arrow-up-circle': ArrowUpCircle,
    'chevron-down': ChevronDown,
    globe: Globe,
    'magnifying-glass': MagnifyingGlass,
    'sign-exclamation-point': SignExclamationPoint,
};

const Icon = ({ name }) => {
    const Ico = icons[name];
    return <Ico />;
};

export default Icon;

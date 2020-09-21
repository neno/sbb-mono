import React from 'react';

import ArrowRight from './icons/arrow-right';
import ArrowUpCircle from './icons/arrow-up-circle';
import ChevronDown from './icons/chevron-down';
import Globe from './icons/globe';
import MagnifyingGlass from './icons/magnifying-glass';
import SignExclamationPoint from './icons/sign-exclamation-point';
import Facebook from './icons/facebook';
import Twitter from './icons/twitter';
import Youtube from './icons/youtube';
import Instagram from './icons/instagram';

const icons = {
    'arrow-right': ArrowRight,
    'arrow-up-circle': ArrowUpCircle,
    'chevron-down': ChevronDown,
    globe: Globe,
    'magnifying-glass': MagnifyingGlass,
    'sign-exclamation-point': SignExclamationPoint,
    facebook: Facebook,
    twitter: Twitter,
    youtube: Youtube,
    instagram: Instagram,
};

const Icon: React.FC<{ name: string }> = ({ name }) => {
    const Ico = icons[name];
    return <Ico />;
};

export default Icon;

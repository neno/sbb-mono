import React from 'react';

import ArrowRight from './icons/ArrowRight';
import ArrowUpCircle from './icons/ArrowUpCircle';
import Checkmark from './icons/Checkmark';
import ChevronDown from './icons/ChevronDown';
import ChevronUp from './icons/ChevronUp';
import Cross from './icons/Cross';
import Globe from './icons/Globe';
import MagnifyingGlass from './icons/MagnifyingGlass';
import SignExclamationPoint from './icons/SignExclamationPoint';
import Facebook from './icons/Facebook';
import Twitter from './icons/Twitter';
import Youtube from './icons/Youtube';
import Instagram from './icons/Instagram';
import Plus from './icons/Plus';
import Minus from './icons/Minus';

const icons = {
    'arrow-right': ArrowRight,
    'arrow-up-circle': ArrowUpCircle,
    checkmark: Checkmark,
    'chevron-down': ChevronDown,
    'chevron-up': ChevronUp,
    cross: Cross,
    globe: Globe,
    'magnifying-glass': MagnifyingGlass,
    'sign-exclamation-point': SignExclamationPoint,
    facebook: Facebook,
    twitter: Twitter,
    youtube: Youtube,
    instagram: Instagram,
    minus: Minus,
    plus: Plus,
};

const Icon: React.FC<{ name: string }> = ({ name }) => {
    const Ico = icons[name];
    return <Ico />;
};

export default Icon;

import React, { ComponentProps } from 'react';
import Icon from '../icon';

interface Props extends ComponentProps<'button'> {
    text: string;
    controls: string;
    classes?: string[];
    expanded?: boolean;
    options?: object;
}

const FooterToggle: React.FC<Props> = ({
    controls,
    text,
    expanded,
    options,
    classes = [],
}) => (
    <button
        className={`a-footer-toggler ${classes.join(' ')}`}
        type="button"
        aria-controls={controls}
        aria-expanded={expanded}
        data-module="collapsible"
        data-collapsible-options={JSON.stringify(options)}
    >

        <span className="u-sr-only">
            {text}
        </span>

        <Icon name="chevron-up" />

    </button>
);

export default FooterToggle;

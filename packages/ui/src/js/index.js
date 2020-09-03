import '../styles/index.scss';
import Collapsible from './libs/Collapsible';
import Tabs from './libs/Tabs';
import FormValidation from './libs/FormValidation';

const timeout = process.env.STORYBOOK_TIMEOUT || 0;

/**
 * IMPORTANT: in storybook this will not work with HMR (hot module replacement)
 * You need to reload the page and wait for the timeout
 */

setTimeout(() => {
    document.querySelectorAll("[data-module='collapsible']").forEach(el => {
        Collapsible(el);
    });

    document.querySelectorAll("[data-module='tabs']").forEach(el => {
        Tabs(el);
    });

    document.querySelectorAll("[data-module='form-validation']").forEach(el => {
        FormValidation(el);
    });
}, timeout);

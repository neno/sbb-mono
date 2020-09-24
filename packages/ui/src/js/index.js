import '../styles/index.scss';
import './libs/detect-touch';
import Tabs from './libs/Tabs';
import FormValidation from './libs/FormValidation';
import Accordion from './libs/Accordion';
import Footer from './libs/Footer';

const timeout = process.env.STORYBOOK_TIMEOUT || 0;

/**
 * IMPORTANT: in storybook this will not work with HMR (hot module replacement)
 * You need to reload the page and wait for the timeout
 */

setTimeout(() => {
    document.querySelectorAll("[data-module='tabs']").forEach(el => {
        Tabs(el);
    });

    document.querySelectorAll("[data-module='form-validation']").forEach(el => {
        FormValidation(el);
    });

    document.querySelectorAll("[data-module='accordion']").forEach(el => {
        Accordion(el);
    });

    const footer = document.querySelector("[data-module='footer']");
    if (footer) {
        Footer(footer);
    }
}, timeout);

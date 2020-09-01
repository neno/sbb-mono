import "../styles/index.scss";
import Collapsible from "./libs/Collapsible";
import Nav from "./libs/Nav";
import Accordion from "./libs/Accordion";

const timeout = process.env.STORYBOOK_TIMEOUT || 0;

/**
 * IMPORTANT: in storybook this will not work with HMR (hot module replacement)
 * You need to reload the page and wait for the timeout
 */

setTimeout(() => {
    document.querySelectorAll("[data-module='collapsible']").forEach((el) => {
        Collapsible(el);
    });

    document.querySelectorAll("[data-module='nav']").forEach((el) => {
        Nav(el);
    });

    document.querySelectorAll("[data-module='accordion']").forEach((el) => {
        Accordion(el);
    });
}, timeout);

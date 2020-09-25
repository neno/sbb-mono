import createModule from './create-module';
import { slideDown, slideUp } from '../utils/animations';

const Collapsible = createModule({
    options: () => ({
        animate: false,
        duration: 300,
    }),
    constructor({ el, state, options }) {
        const targetID = el.getAttribute('aria-controls');
        const target = document.getElementById(targetID);

        const showTarget = () => {
            el.setAttribute('aria-expanded', 'true');
            if (options.activeCls) {
                el.classList.add(options.activeCls);
            }

            if (options.animate) {
                slideDown(target, options.duration);
            }
            target.setAttribute('aria-hidden', 'false');
            if (options.targetActiveCls) {
                target.classList.add(options.targetActiveCls);
            }
        };

        const hideTarget = () => {
            el.setAttribute('aria-expanded', 'false');
            if (options.activeCls) {
                el.classList.remove(options.activeCls);
            }

            if (options.animate) {
                slideUp(target, options.duration);
            }
            target.setAttribute('aria-hidden', 'true');
            if (options.targetActiveCls) {
                target.classList.remove(options.targetActiveCls);
            }
        };

        const toggle = () => {
            if (target) {
                if (el.getAttribute('aria-expanded') === 'true') {
                    hideTarget();
                } else {
                    showTarget();
                }
            } else {
                // eslint-disable-next-line no-console
                console.log('The target selector was not found.');
            }
        };

        const bindEvents = () => {
            el.addEventListener('click', toggle);
        };

        const unbindEvents = () => {
            el.removeEventListener('click', toggle);
        };

        // Public Methods
        state.init = () => {
            bindEvents();
        };

        state.destroy = () => {
            unbindEvents();
        };

        state.init();
        return state;
    },
});

export default Collapsible;

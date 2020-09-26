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
            if (target) {
                if (options.animate) {
                    slideDown(target, options.duration);
                }

                target.setAttribute('aria-hidden', 'false');
                if (options.targetActiveCls) {
                    target.classList.add(options.targetActiveCls);
                }
            }
        };

        const activate = () => {
            el.setAttribute('aria-expanded', 'true');
            if (options.activeCls) {
                el.classList.add(options.activeCls);
            }

            showTarget();
        };

        const hideTarget = () => {
            if (target) {
                if (options.animate) {
                    slideUp(target, options.duration);
                }

                target.setAttribute('aria-hidden', 'true');
                if (options.targetActiveCls) {
                    target.classList.remove(options.targetActiveCls);
                }
            }
        };

        const deactivate = () => {
            el.setAttribute('aria-expanded', 'false');
            if (options.activeCls) {
                el.classList.remove(options.activeCls);
            }

            hideTarget();
        };

        const toggle = () => {
            if (el.getAttribute('aria-expanded') === 'true') {
                deactivate();
            } else {
                activate();
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

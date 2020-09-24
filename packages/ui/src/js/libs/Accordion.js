import createModule from './create-module';
import { slideDown, slideUp } from '../utils/animations';

const Accordion = createModule({
    options: () => ({
        triggerSelector: '.a-accordion-btn',
        targetSelector: '.a-accordion-panel',
        activeCls: 'a-accordion-btn--active',
        targetActiveCls: 'a-accordion-panel--active',
        duration: 300,
    }),
    constructor({ el, state, options }) {
        const triggers = Array.from(el.querySelectorAll(options.triggerSelector));
        const targets = Array.from(el.querySelectorAll(options.targetSelector));

        const getIndex = trigger => triggers.indexOf(trigger);

        const showTarget = trigger => {
            const target = targets[getIndex(trigger)];
            trigger.setAttribute('aria-expanded', 'true');
            trigger.classList.add(options.activeCls);

            target.setAttribute('aria-hidden', 'false');
            slideDown(target, options.duration);
            target.classList.add(options.targetActiveCls);
        };

        const showAllTargets = () => {
            targets.forEach(target => {
                target.setAttribute('aria-hidden', 'false');
                slideDown(target, 1);
                target.classList.add(options.targetActiveCls);
            });
        };

        const hideTarget = trigger => {
            const target = targets[getIndex(trigger)];

            trigger.setAttribute('aria-expanded', 'false');
            trigger.classList.remove(options.activeCls);

            target.setAttribute('aria-hidden', 'true');
            slideUp(target, options.duration);
            target.classList.remove(options.targetActiveCls);
        };

        const hideAllTargets = () => {
            targets.forEach(target => {
                target.setAttribute('aria-hidden', 'true');
                slideUp(target, 1);
                target.classList.remove(options.targetActiveCls);
            });
        };

        const toggle = event => {
            const trigger = event.target;

            if (!trigger.closest(options.triggerSelector)) {
                return;
            }

            if (trigger.getAttribute('aria-expanded') === 'true') {
                hideTarget(trigger);
            } else {
                showTarget(trigger);
            }
        };

        const bindEvents = () => {
            el.addEventListener('click', toggle);
        };

        const unbindEvents = () => {
            el.addEventListener('click', toggle);
        };

        // Public Methods
        state.showAllTargets = () => {
            showAllTargets();
        };

        state.hideAllTargets = () => {
            hideAllTargets();
        };

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

export default Accordion;

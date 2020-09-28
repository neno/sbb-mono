import createModule from './create-module';
import { slideDown, slideUp } from '../utils/animations';

const Accordion = createModule({
    options: () => ({
        triggerSelector: '.a-accordion-btn',
        targetSelector: '.a-accordion-panel',
        activeCls: 'a-accordion-btn--active',
        targetClosedCls: 'a-accordion-panel--closed',
        duration: 300,
    }),
    constructor({ el, state, options }) {
        const triggers = Array.from(el.querySelectorAll(options.triggerSelector));
        const targets = Array.from(el.querySelectorAll(options.targetSelector));

        const getIndex = trigger => triggers.indexOf(trigger);

        const showTarget = (trigger, duration = options.duration) => {
            const target = targets[getIndex(trigger)];
            trigger.setAttribute('aria-expanded', 'true');
            trigger.classList.add(options.activeCls);

            target.setAttribute('aria-hidden', 'false');
            slideDown(target, duration);
            target.classList.remove(options.targetClosedCls);
        };

        const showAllTargets = () => {
            triggers.forEach(trigger => {
                showTarget(trigger, 1);
            });
        };

        const setAllAriaAttrs = expanded => {
            triggers.forEach(trigger => {
                trigger.setAttribute('aria-expanded', expanded);
            });

            targets.forEach(target => {
                target.setAttribute('aria-hidden', !expanded);
            });
        };

        const hideTarget = (trigger, duration = options.duration) => {
            const target = targets[getIndex(trigger)];

            trigger.setAttribute('aria-expanded', 'false');
            trigger.classList.remove(options.activeCls);

            target.setAttribute('aria-hidden', 'true');
            slideUp(target, duration);
            target.classList.add(options.targetClosedCls);
        };

        const hideAllTargets = () => {
            triggers.forEach(trigger => {
                hideTarget(trigger, 1);
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
        state.setAllAriaAttrs = expanded => {
            setAllAriaAttrs(expanded);
        };

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

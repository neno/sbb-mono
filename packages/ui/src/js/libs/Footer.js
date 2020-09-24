import createModule from './create-module';
import Accordion from './Accordion';
import { breakpoints, Breakpointer } from './BreakpointManager';
import debounce from '../utils/debounce';

const Footer = createModule({

    constructor: ({ el, state }) => {
        const accordion = Accordion(el);
        const breakpointer = new Breakpointer();

        const handleResize = () => {
            if (breakpointer.testBreachkpoint(breakpoints.tablet)) {
                accordion.showAllTargets();
            } else {
                accordion.hideAllTargets();
            }
        };

        const debouncedResize = debounce(handleResize, 200);

        const bindEvents = () => {
            window.addEventListener('resize', debouncedResize);
        };

        const unbindEvents = () => {
            window.removeEventListener('resize', debouncedResize);
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

export default Footer;

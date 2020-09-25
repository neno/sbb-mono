import createModule from './create-module';
import Accordion from './Accordion';
import { breakpoints, Breakpointer } from './BreakpointManager';
import debounce from '../utils/debounce';

const Footer = createModule({

    constructor: ({ el, state }) => {
        const accordion = Accordion(el);
        const breakpointer = new Breakpointer();

        const setToggableAreas = () => {
            const isAboveTablet = breakpointer.testBreachkpoint(breakpoints.tablet);
            if (isAboveTablet) {
                accordion.showAllTargets();
            } else {
                accordion.hideAllTargets();
            }
        };

        const handleResize = () => {
            setToggableAreas();
        };

        const debouncedResize = debounce(handleResize, 50);

        const bindEvents = () => {
            window.addEventListener('resize', debouncedResize);
        };

        const unbindEvents = () => {
            window.removeEventListener('resize', debouncedResize);
        };

        state.init = () => {
            setToggableAreas();
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

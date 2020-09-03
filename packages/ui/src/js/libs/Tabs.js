import createModule from './create-module';
import KeyCodes from '../utils/keycodes';

const Tabs = createModule({
    options: () => ({
        tabsSelector: '.a-tab',
        panelsSelector: '.a-tab-panel',
        tabActiveClass: 'a-tab--active',
        panelActiveClass: 'a-tab-panel--active',
    }),
    constructor: ({ el, state, options }) => {
        const tabs = el.querySelectorAll(options.tabsSelector);
        const panels = el.querySelectorAll(options.panelsSelector);
        const direction = {
            37: -1,
            39: 1,
        };

        const deactivateTabs = () => {
            for (let t = 0; t < tabs.length; t++) {
                tabs[t].setAttribute('tabindex', '-1');
                tabs[t].classList.remove(options.tabActiveClass);
                tabs[t].setAttribute('aria-selected', 'false');
            }

            for (let p = 0; p < panels.length; p++) {
                panels[p].classList.remove(options.panelActiveClass);
            }
        };

        const activatePanel = tab => {
            const panel = tab.getAttribute('data-panel');
            el.querySelector(`#${panel}`).classList.add(options.panelActiveClass);
        };

        const activateTab = tab => {
            deactivateTabs();
            tab.removeAttribute('tabindex');
            tab.setAttribute('aria-selected', 'true');
            tab.classList.add(options.tabActiveClass);
            activatePanel(tab);
        };

        const handleClick = event => {
            if (event.target.closest(options.tabsSelector)) {
                activateTab(event.target);
            }
        };

        const focusFirstTab = () => {
            tabs[0].focus();
        };

        const focusLastTab = () => {
            tabs[tabs.length - 1].focus();
        };

        const switchTabOnArrowPress = event => {
            const key = event.which || event.keyCode;

            if (direction[key]) {
                const target = event.target;
                if (target.index !== undefined) {
                    const tab = tabs[target.index + direction[key]];
                    if (tab) {
                        tab.focus();
                    } else if (key === KeyCodes.LEFT) {
                        focusLastTab();
                    } else if (key === KeyCodes.RIGHT) {
                        focusFirstTab();
                    }
                }
            }
        };

        const handleKeyup = event => {
            const key = event.which || event.keyCode;
            switch (key) {
            case KeyCodes.LEFT:
            case KeyCodes.RIGHT:
                switchTabOnArrowPress(event);
                break;
            case KeyCodes.ENTER:
            case KeyCodes.SPACE:
                activateTab(event.target);
                break;
            default:
                break;
            }
        };

        const bindEvents = () => {
            el.addEventListener('click', handleClick);
            el.addEventListener('keyup', handleKeyup);
        };

        const unbindEvents = () => {
            el.removeEventListener('click', handleClick);
            el.removeEventListener('keyup', handleKeyup);
        };

        const setIndexOnTabs = () => {
            for (let t = 0; t < tabs.length; t++) {
                tabs[t].index = t;
            }
        };

        // Public Methods
        state.init = () => {
            setIndexOnTabs();
            bindEvents();
        };

        state.destroy = () => {
            unbindEvents();
        };

        state.init();
        return state;
    },
});

export default Tabs;

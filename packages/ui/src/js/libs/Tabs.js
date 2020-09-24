import createModule from './create-module';

const Tabs = createModule({
    options: () => ({
        tabListSelector: '.m-tablist',
        tabsSelector: '.a-tab',
        panelsSelector: '.a-tab-panel',
        tabActiveClass: 'a-tab--active',
        panelActiveClass: 'a-tab-panel--active',
    }),
    constructor: ({ el, state, options }) => {
        const tabList = el.querySelector(options.tabListSelector);
        const tabs = el.querySelectorAll(options.tabsSelector);
        const panels = el.querySelectorAll(options.panelsSelector);
        const direction = {
            ArrowLeft: -1,
            ArrowRight: 1,
            Left: -1,
            Right: 1,
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
            const key = event.key;

            if (direction[key]) {
                const target = event.target;
                if (target.index !== undefined) {
                    const tab = tabs[target.index + direction[key]];
                    if (tab) {
                        tab.focus();
                    } else if (key === 'ArrowLeft' || key === 'Left') {
                        focusLastTab();
                    } else if (key === 'ArrowRight' || key === 'Right') {
                        focusFirstTab();
                    }
                }
            }
        };

        const handleKeyup = event => {
            const key = event.key;
            switch (key) {
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'Left':
            case 'Right':
                switchTabOnArrowPress(event);
                break;
            case 'Enter':
            case 'Space':
            case 'Spacebar':
                activateTab(event.target);
                break;
            default:
                break;
            }
        };

        const bindEvents = () => {
            tabList.addEventListener('click', handleClick);
            tabList.addEventListener('keyup', handleKeyup);
        };

        const unbindEvents = () => {
            tabList.removeEventListener('click', handleClick);
            tabList.removeEventListener('keyup', handleKeyup);
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

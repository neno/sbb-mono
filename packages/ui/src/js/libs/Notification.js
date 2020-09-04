import createModule from './create-module';

const Notification = createModule({
    options: () => ({
        class: 'a-notification',
    }),
    constructor: ({ el, state, options }) => {
        const addContent = () => {

        };

        const createContainer = () => {
            let container = el.querySelector(options.class);

            if (!container) {
                container = document.createElement('div');
                container.className = options.class;
                el.insertBefore(container, el.firstChild);
            }
        };

        const createNotification = () => {
            createContainer();
            addContent();
        };

        const destoryNotification = () => {
            const container = el.querySelector(options.class);
            container.parentNode.removeChild(container);
        };

        // Public Methods
        state.init = () => {
            createNotification();
        };

        state.destroy = () => {
            destoryNotification();
        };

        // state.init();
        return state;
    },
});

export default Notification;

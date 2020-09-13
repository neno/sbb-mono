import createModule from './create-module';

const Notification = createModule({
    options: () => ({
        class: 'a-notification',
        textContainerClass: 'a-notification__text',
    }),
    constructor: ({ el, state, options }) => {
        let container = el.querySelector(`.${options.class.replace(/\s+/g, '.')}`);
        let textContainer = container.querySelector(`.${options.textContainerClass.replace(/\s+/g, '.')}`);

        const addIcon = () => {
            container.innerHTML = options.icon;
        };

        const addContent = content => {
            textContainer.innerHTML = content;
        };

        const addTextContainer = () => {
            if (!textContainer) {
                textContainer = document.createElement('div');
                textContainer.className = options.textContainerClass;
                container.appendChild(textContainer);
            }
        };

        const createContainer = () => {
            if (!container) {
                container = document.createElement('div');
                container.setAttribute('role', 'alert');
                container.className = options.class;

                if (options.icon) {
                    addIcon();
                }
                addTextContainer();

                el.insertBefore(container, el.firstChild);
            }
        };

        const createNotification = () => {
            createContainer();
        };

        const destoryNotification = () => {
            container.parentNode.removeChild(container);
        };

        // Public Methods
        state.addContent = content => {
            addContent(content);
        };

        state.init = () => {
            createNotification();
        };

        state.destroy = () => {
            destoryNotification();
        };

        state.init();
        return state;
    },
});

export default Notification;

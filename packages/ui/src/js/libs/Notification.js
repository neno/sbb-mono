import createModule from './create-module';

const Notification = createModule({
    options: () => ({
        class: 'a-notification',
        textContainerClass: 'a-notification__text',
    }),
    constructor: ({ el, state, options }) => {
        let notification;
        let textContainer;

        const addIcon = () => {
            notification.innerHTML = options.icon;
        };

        const addContent = content => {
            textContainer.innerHTML = content;
        };

        const addTextContainer = () => {
            if (!textContainer) {
                textContainer = document.createElement('div');
                textContainer.className = options.textContainerClass;
                notification.appendChild(textContainer);
            }
        };

        const createNotification = () => {
            checkForExistingNotification();

            if (!notification) {
                notification = document.createElement('div');
                notification.setAttribute('role', 'alert');
                notification.className = options.class;

                if (options.icon) {
                    addIcon();
                }
                addTextContainer();

                el.insertBefore(notification, el.firstChild);
            }
        };

        const checkForExistingNotification = () => {
            notification = el.querySelector(`.${options.class.replace(/\s+/g, '.')}`);
            if (notification) {
                textContainer = notification.querySelector(`.${options.textContainerClass.replace(/\s+/g, '.')}`);
            }
        };

        const init = () => {
            createNotification();
        };

        const destoryNotification = () => {
            notification.parentNode.removeChild(notification);
        };

        // Public Methods
        state.addContent = content => {
            addContent(content);
        };

        state.init = () => {
            init();
        };

        state.destroy = () => {
            destoryNotification();
        };

        state.init();
        return state;
    },
});

export default Notification;

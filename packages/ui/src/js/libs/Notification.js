import createModule from './create-module';
import { signExclamationPoint } from '../utils/icons';

const icons = {
    error: signExclamationPoint,
};

const Notification = createModule({
    options: () => ({
        class: 'a-notification',
        classes: {
            error: 'a-notification--error',
        },
        textContainerClass: 'a-notification__text',
    }),
    constructor: ({ el, state, options }) => {
        let notification;
        let textContainer;

        const addIcon = () => {
            notification.innerHTML = icons[options.type];
        };

        const append = node => {
            textContainer.appendChild(node);
        };

        const addTextContainer = () => {
            if (!textContainer) {
                textContainer = document.createElement('div');
                textContainer.className = options.textContainerClass;

                if (options.title) {
                    textContainer.innerHTML = `<strong>${options.title}</strong>`;
                }

                notification.appendChild(textContainer);
            }
        };

        const setType = () => {
            notification.classList.add(options.classes[options.type]);
            addIcon();
        };

        const createNotification = () => {
            notification = document.createElement('div');
            notification.setAttribute('role', 'alert');
            notification.className = options.class;

            if (options.type) {
                setType();
            }

            addTextContainer();

            el.insertBefore(notification, el.firstChild);
        };

        const init = () => {
            createNotification();
        };

        const destroy = () => {
            notification.parentNode.removeChild(notification);
        };

        // Public Methods

        state.append = node => {
            append(node);
        };

        state.init = () => {
            init();
        };

        state.destroy = () => {
            destroy();
        };

        state.init();
        return state;
    },
});

export default Notification;

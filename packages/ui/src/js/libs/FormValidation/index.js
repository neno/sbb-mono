import createModule from '../create-module';
import hasError from './hasError';
import Notification from '../Notification';
import { signExclamationPoint } from '../../utils/icons';

const Tabs = createModule({
    options: () => ({
        fieldErrorClass: 'a-input--error',
        errorClass: 'a-error',
        notificationContainerClass: 'o-form__notification',
        notificationTitle: 'Check following entries:',
        notificationClass: 'a-notification a-notification--error',
    }),
    constructor: ({ el, state, options }) => {
        let notification;
        let notificationContainer = el.querySelector(`.${options.notificationContainerClass}`);

        const createErrorList = fields => {
            let errorList = '<ul class="a-notification__error-list">';

            for (let i = 0; i < fields.length; i++) {
                const field = fields[i];
                errorList += `<li><a href="#${field.id}">${field.label}</a></li>`;
            }

            errorList += '</ul>';

            return errorList;
        };

        const createNotificationContent = fields => {
            let content = `<strong>${options.notificationTitle}</strong>`;

            content += createErrorList(fields);

            return content;
        };

        const createNotificationContainer = () => {
            if (!notificationContainer) {
                notificationContainer = document.createElement('div');
                notificationContainer.className = options.notificationContainerClass;
                el.insertBefore(notificationContainer, el.firstChild);
            }
        };

        const addNotification = invalidFields => {
            if (!notification) {
                createNotificationContainer();

                notification = new Notification(notificationContainer, {
                    class: options.notificationClass,
                    icon: signExclamationPoint,
                });
            }

            notification.addContent(createNotificationContent(invalidFields));
        };

        const createInvalidFieldObject = field => {
            const label = field.parentNode.querySelector(`label[for=${field.id}]`).childNodes[0].textContent;

            return {
                id: field.id,
                label,
            };
        };

        const handleSubmit = event => {
            const fields = event.target.elements;
            const invalidFields = [];

            let hasErrors;
            for (let i = 0; i < fields.length; i++) {
                const error = hasError(fields[i]);
                if (error) {
                    const field = fields[i];
                    showError(field, error);

                    const invalidField = createInvalidFieldObject(field);
                    invalidFields.push(invalidField);

                    if (!hasErrors) {
                        hasErrors = field;
                    }
                }
            }

            if (hasErrors) {
                event.preventDefault();

                addNotification(invalidFields);
                hasErrors.focus();
            }
        };

        const createErrorMessage = (field, error, id) => {
            let message = field.form.querySelector(`#error-for-${id}`);

            if (!message) {
                message = document.createElement('div');
                message.className = options.errorClass;
                message.id = `error-for-${id}`;
                field.parentNode.insertBefore(message, field.nextSibling);
            }

            message.innerHTML = error;
            message.style.display = 'block';
            message.style.visibility = 'visible';
        };

        const setInputAsInvalid = (field, id) => {
            field.classList.add(options.fieldErrorClass);
            field.setAttribute('aria-describedby', `error-for-${id}`);
        };

        const showError = (field, error) => {
            const id = field.id || field.name;
            if (!id) return;

            createErrorMessage(field, error, id);
            setInputAsInvalid(field, id);

            field.addEventListener('input', handleInput);
        };

        const hideErrorMessage = (field, id) => {
            const message = field.form.querySelector(`#error-for-${id}`);
            if (!message) return;

            message.innerHTML = '';
            message.style.display = 'none';
            message.style.visibility = 'hidden';
        };

        const removeError = field => {
            const id = field.id || field.name;
            if (!id) return;

            hideErrorMessage(field, id);

            field.classList.remove(options.fieldErrorClass);
            field.removeAttribute('aria-describedby');

            field.removeEventListener('input', handleInput);
        };

        const handleBlur = event => {
            if (event.target.type === 'text' || event.target.type === 'email' || event.target.type === 'password') {
                const error = hasError(event.target);

                if (error) {
                    showError(event.target, error);
                } else {
                    removeError(event.target);
                }
            }
        };

        const handleInput = event => {
            const error = hasError(event.target);

            if (!error) {
                removeError(event.target);
            }
        };

        const bindEvents = () => {
            el.addEventListener('submit', handleSubmit);
            el.addEventListener('blur', handleBlur, true);
        };

        const unbindEvents = () => {
            el.removeEventListener('submit', handleSubmit);
            el.removeEventListener('blur', handleBlur);
        };

        const disableNativeValidation = () => {
            el.setAttribute('novalidate', true);
        };

        // Public Methods
        state.init = () => {
            disableNativeValidation();
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

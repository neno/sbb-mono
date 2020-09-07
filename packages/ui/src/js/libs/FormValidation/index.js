import createModule from '../create-module';
import hasError from './hasError';
import Notification from '../Notification';
import { signExclamationPoint } from '../../utils/icons';

const Tabs = createModule({
    options: () => ({
        fieldErrorClass: 'a-input--error',
        errorClass: 'a-error',
        notificationTitle: 'Check following entries:',
    }),
    constructor: ({ el, state, options }) => {
        let notification;

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

        const handleSubmit = event => {
            const fields = event.target.elements;
            const invalidFields = [];
            let hasErrors;
            for (let i = 0; i < fields.length; i++) {
                const error = hasError(fields[i]);
                if (error) {
                    const field = fields[i];
                    showError(field, error);
                    invalidFields.push({
                        id: field.id,
                        label: field.parentNode.querySelector(`label[for=${field.id}]`).textContent,
                    });

                    if (!hasErrors) {
                        hasErrors = field;
                    }
                }
            }

            // If there are errors, don't submit form and focus on first element with error
            if (hasErrors) {
                event.preventDefault();
                if (!notification) {
                    notification = new Notification(el, {
                        class: 'a-notification a-notification--error',
                        icon: signExclamationPoint,
                    });
                }
                notification.addContent(createNotificationContent(invalidFields));
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
        };

        const hideErrorMessage = (field, id) => {
            // Check if an error message is in the DOM
            const message = field.form.querySelector(`#error-for-${id}`);
            if (!message) return;

            // If so, hide it
            message.innerHTML = '';
            message.style.display = 'none';
            message.style.visibility = 'hidden';
        };

        // Remove the error message
        const removeError = field => {
            const id = field.id || field.name;
            if (!id) return;

            hideErrorMessage(field, id);

            field.classList.remove(options.fieldErrorClass);
            field.removeAttribute('aria-describedby');
        };

        const handleBlur = event => {
            // Validate the field
            const error = hasError(event.target);

            // If there's an error, show it
            if (error) {
                showError(event.target, error);
            } else {
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

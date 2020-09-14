import createModule from '../create-module';
import hasError from './hasError';
import InvalidFields from './InvalidFields';
import Notification from '../Notification';
import ErrorList from './ErrorList';

const FormValidation = createModule({
    options: () => ({
        fieldErrorClass: 'a-input--error',
        errorClass: 'a-error',
        errorsListClass: 'a-notification__error-list',
        notificationContainerClass: 'o-form__notification',
        notificationTitle: 'Check following entries:',
        notificationClass: 'a-notification a-notification--error',
    }),
    constructor: ({ el, state, options }) => {
        const invalidFields = new InvalidFields();
        let notification;
        let errorList;
        let notificationContainer = el.querySelector(`.${options.notificationContainerClass}`);

        const createNotificationContainer = () => {
            if (!notificationContainer) {
                notificationContainer = document.createElement('div');
                notificationContainer.className = options.notificationContainerClass;
                el.insertBefore(notificationContainer, el.firstChild);
            } else {
                notificationContainer.innerHTML = '';
            }
        };

        const createNotificationTitle = () => {
            const title = document.createElement('strong');
            title.textContent = options.notificationTitle;
            notification.append(title);
        };

        const createNotification = () => {
            createNotificationContainer();

            notification = new Notification(notificationContainer, {
                type: 'error',
            });

            createNotificationTitle();
        };

        const createErrorList = () => {
            const list = document.createElement('ul');

            list.classList.add(options.errorsListClass);
            errorList = new ErrorList(list);
            notification.append(list);
        };

        const checkForInvalidFields = fields => {
            for (let i = 0; i < fields.length; i++) {
                const field = fields[i];
                const error = hasError(field);

                if (error) {
                    invalidFields.add(field.id, field, error);
                }
            }
        };

        const handleSubmit = event => {
            const fields = event.target.elements;

            invalidFields.reset();
            checkForInvalidFields(fields);

            if (invalidFields.hasFields()) {
                event.preventDefault();

                if (!notification) {
                    createNotification();
                }

                if (!errorList) {
                    createErrorList();
                } else {
                    errorList.removeAll();
                }

                for (let i = 0; i < invalidFields.fields.length; i++) {
                    const field = invalidFields.fields[i];
                    showError(field.el, field.error);
                    errorList.addItem(field);
                }

                invalidFields.first().el.focus();
            } else {
                destroy();
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

        const addInvalidInputAttr = (field, id) => {
            field.classList.add(options.fieldErrorClass);
            field.setAttribute('aria-describedby', `error-for-${id}`);
        };

        const showError = (field, error) => {
            const id = field.id || field.name;
            if (!id) return;

            createErrorMessage(field, error, id);
            addInvalidInputAttr(field, id);

            field.addEventListener('input', handleInput);
        };

        const hideErrorMessage = (field, id) => {
            const message = field.form.querySelector(`#error-for-${id}`);
            if (!message) return;

            message.innerHTML = '';
            message.style.display = 'none';
            message.style.visibility = 'hidden';
        };

        const removeInvalidInputAttr = field => {
            field.classList.remove(options.fieldErrorClass);
            field.removeAttribute('aria-describedby');

            field.removeEventListener('input', handleInput);
        };

        const removeError = field => {
            const id = field.id || field.name;
            if (!id) return;

            hideErrorMessage(field, id);
            removeInvalidInputAttr(field);
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
            if (!hasError(event.target)) {
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

        const destroyErrorlist = () => {
            if (errorList) {
                errorList.destroy();
                errorList = null;
            }
        };

        const destroyNotification = () => {
            if (notification) {
                destroyErrorlist();

                notification.destroy();
                notification = null;
            }
        };

        const destroy = () => {
            unbindEvents();
            destroyNotification();
        };

        // Public Methods
        state.init = () => {
            disableNativeValidation();
            bindEvents();
        };

        state.destroy = () => {
            destroy();
        };

        state.init();
        return state;
    },
});

export default FormValidation;

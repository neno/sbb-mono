import createModule from '../create-module';
import hasError from './hasError';
import ErrorHandler from './ErrorHandler';
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
        const errorHandler = new ErrorHandler(options.errorClass, options.fieldErrorClass);
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

        const createErrorList = () => {
            if (!errorList) {
                const list = document.createElement('ul');
                list.classList.add(options.errorsListClass);
                errorList = new ErrorList(list);
                notification.append(list);
            } else {
                errorList.removeAll();
            }
        };

        const handleNotification = () => {
            if (!notification) {
                createNotificationContainer();
                notification = new Notification(notificationContainer, {
                    type: 'error',
                    title: options.notificationTitle,
                });
            }

            createErrorList();
        };

        const checkForInvalidFields = fields => {
            invalidFields.reset();

            fields.forEach(field => {
                const error = hasError(field);

                if (error) {
                    invalidFields.add(field.id, field, error);
                }
            });
        };

        const handleInvalidSubmit = () => {
            handleNotification();

            invalidFields.fields.forEach(field => {
                errorHandler.show(field.el, field.error);
                errorList.addItem(field);
            });

            invalidFields.first().el.focus();
        };

        const handleSubmit = event => {
            const fields = event.target.elements;
            checkForInvalidFields(fields);

            if (invalidFields.hasFields()) {
                event.preventDefault();
                handleInvalidSubmit();
            } else {
                destroy();
            }
        };

        const handleBlur = event => {
            if (event.target.type === 'text' || event.target.type === 'email' || event.target.type === 'password') {
                const error = hasError(event.target);

                if (error) {
                    errorHandler.show(event.target, error);
                } else {
                    errorHandler.hide(event.target);
                }
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

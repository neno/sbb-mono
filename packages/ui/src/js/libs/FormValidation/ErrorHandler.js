import hasError from './hasError';

export default class ErrorHandler {
    constructor(errorClass, fieldErrorClass) {
        this.errorClass = errorClass;
        this.fieldErrorClass = fieldErrorClass;
        this.handleInput = this.handleInput.bind(this);
    }

    hideErrorMessage(field, id) {
        const message = field.form.querySelector(`#error-for-${id}`);
        if (!message) return;

        message.innerHTML = '';
        message.style.display = 'none';
        message.style.visibility = 'hidden';
    }

    removeInvalidInputAttr(field) {
        field.classList.remove(this.fieldErrorClass);
        field.removeAttribute('aria-describedby');
        field.removeEventListener('input', this.handleInput);
    }

    createErrorMessage(field, error, id) {
        let message = field.form.querySelector(`#error-for-${id}`);

        if (!message) {
            message = document.createElement('div');
            message.className = this.errorClass;
            message.id = `error-for-${id}`;
            field.parentNode.insertBefore(message, field.nextSibling);
        }

        message.innerHTML = error;
        message.style.display = 'block';
        message.style.visibility = 'visible';
    }

    addInvalidInputAttr(field, id) {
        field.classList.add(this.fieldErrorClass);
        field.setAttribute('aria-describedby', `error-for-${id}`);
    }

    hide(field) {
        const id = field.id || field.name;
        if (!id) return;

        this.hideErrorMessage(field, id);
        this.removeInvalidInputAttr(field);
    }

    handleInput(event) {
        if (!hasError(event.target)) {
            this.hide(event.target);
        }
    }

    show(field, error) {
        const id = field.id || field.name;
        if (!id) return;

        this.createErrorMessage(field, error, id);
        this.addInvalidInputAttr(field, id);
        field.addEventListener('input', this.handleInput);
    }
}

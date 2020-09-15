export default class ErrorList {
    constructor(invalidFields, listClass) {
        this.invalidFields = invalidFields;
        this.listClass = listClass;
        this.handleClick = this.handleClick.bind(this);

        this.init();
    }

    handleAnchorClick(event, anchor) {
        event.preventDefault();
        anchor.fieldEl.focus();
    }

    getFieldLabelText(field) {
        return field.el.parentNode.querySelector(`label[for=${field.id}]`).childNodes[0].textContent;
    }

    addErrorAnchor(field) {
        const anchor = document.createElement('a');
        anchor.textContent = this.getFieldLabelText(field);
        anchor.href = `#${field.id}`;
        anchor.fieldEl = field.el;

        return anchor;
    }

    addItem(field) {
        const listItem = document.createElement('li');
        const errorAnchor = this.addErrorAnchor(field);

        listItem.appendChild(errorAnchor);
        this.list.appendChild(listItem);
    }

    createListItem() {
        this.invalidFields.forEach(field => {
            this.addItem(field);
        })
    }

    removeAll() {
        this.list.innerHTML = '';
    }

    update(invalidFields) {
        this.invalidFields = invalidFields;
        this.removeAll();
        this.createListItem()
    }

    handleClick(event) {
        const anchor = event.target.closest('a');
        if (anchor) {
            this.handleAnchorClick(event, anchor);
        }
    }

    createList() {
        if (!this.list) {
            this.list = document.createElement('ul');
            this.list.classList.add(this.listClass);
        }

        this.createListItem()
    }

    bindEvents() {
        this.list.addEventListener('click', this.handleClick);
    }

    unbindEvents() {
        this.list.removeEventListener('click', this.handleClick);
    }

    init() {
        this.createList();
        this.bindEvents();
    }

    destroy() {
        this.unbindEvents();
        this.list.remove();
        this.list = null;
    }
}

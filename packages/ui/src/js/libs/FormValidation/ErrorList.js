import createModule from '../create-module';

const ErrorList = createModule({
    constructor: ({ el, state }) => {
        const handleAnchorClick = (event, anchor) => {
            event.preventDefault();
            anchor.fieldEl.focus();
        };

        const getFieldLabelText = field => (
            field.el.parentNode.querySelector(`label[for=${field.id}]`).childNodes[0].textContent
        );

        const addErrorAnchor = field => {
            const anchor = document.createElement('a');
            anchor.textContent = getFieldLabelText(field);
            anchor.href = `#${field.id}`;
            anchor.fieldEl = field.el;

            return anchor;
        };

        const addItem = field => {
            const listItem = document.createElement('li');
            const errorAnchor = addErrorAnchor(field);

            listItem.appendChild(errorAnchor);
            el.appendChild(listItem);
        };

        const removeAll = () => {
            el.innerHTML = '';
        };

        const handleClick = event => {
            const anchor = event.target.closest('a');
            if (anchor) {
                handleAnchorClick(event, anchor);
            }
        };

        const bindEvents = () => {
            el.addEventListener('click', handleClick);
        };

        const unbindEvents = () => {
            el.removeEventListener('click', handleClick);
        };

        // Public Methods
        state.addItem = field => {
            addItem(field);
        };

        state.removeAll = () => {
            removeAll();
        };

        state.init = () => {
            bindEvents();
        };

        state.destroy = () => {
            unbindEvents();
        };

        state.init();
        return state;
    },
});

export default ErrorList;

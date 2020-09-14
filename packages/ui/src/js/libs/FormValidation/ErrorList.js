import createModule from '../create-module';

const ErrorList = createModule({
    constructor: ({ el, state }) => {
        const handleAnchorClick = (event, fieldEl) => {
            event.preventDefault();
            fieldEl.focus();
        };

        const getFieldLabelText = field => (
            field.el.parentNode.querySelector(`label[for=${field.id}]`).childNodes[0].textContent
        );

        const addErrorAnchor = field => {
            const anchor = document.createElement('a');
            anchor.textContent = getFieldLabelText(field);
            anchor.href = `#${field.id}`;

            anchor.addEventListener('click', event => {
                handleAnchorClick(event, field.el);
            });

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

        // Public Methods
        state.addItem = field => {
            addItem(field);
        };

        state.removeAll = () => {
            removeAll();
        };

        state.destroy = () => {
        };

        return state;
    },
});

export default ErrorList;

// import createModule from './create-module';

// const Notification = createModule({
//     options: () => ({
//         class: 'a-notification',
//     }),
//     constructor: ({ el, state, options }) => {
//         let instance;

//         const handleSubmit = event => {
//             const fields = event.target.elements;

//             // Validate each field
//             // Store the first field with an error to a variable so we can bring it into focus later
//             let hasErrors;
//             for (let i = 0; i < fields.length; i++) {
//                 const error = hasError(fields[i]);
//                 if (error) {
//                     showError(fields[i], error);
//                     if (!hasErrors) {
//                         hasErrors = fields[i];
//                     }
//                 }
//             }

//             // If there are errrors, don't submit form and focus on first element with error
//             if (hasErrors) {
//                 event.preventDefault();
//                 hasErrors.focus();
//             }
//         };

//         const createContainer = () => {
//             let message = el.querySelector(`#error-for-${id}`);

//             if (!message) {
//                 message = document.createElement('div');
//                 message.className = options.errorClass;
//                 message.id = `error-for-${id}`;
//                 field.parentNode.insertBefore(message, field.nextSibling);
//             }

//             message.innerHTML = error;
//             message.style.display = 'block';
//             message.style.visibility = 'visible';
//         };

//         const setInputAsInvalid = (field, id) => {
//             field.classList.add(options.fieldErrorClass);
//             field.setAttribute('aria-describedby', `error-for-${id}`);
//         };

//         const showError = (field, error) => {
//             const id = field.id || field.name;
//             if (!id) return;

//             createErrorMessage(field, error, id);
//             setInputAsInvalid(field, id);
//         };

//         const hideErrorMessage = (field, id) => {
//             // Check if an error message is in the DOM
//             const message = field.form.querySelector(`#error-for-${id}`);
//             if (!message) return;

//             // If so, hide it
//             message.innerHTML = '';
//             message.style.display = 'none';
//             message.style.visibility = 'hidden';
//         };

//         const createNotification = () => {
//             const message = field.form.querySelector(`#error-for-${id}`);
//         };

//         // Public Methods
//         state.init = () => {
//             createNotification();
//         };

//         state.destroy = () => {

//         };

//         state.init();
//         return state;
//     },
// });

// export default Notification;

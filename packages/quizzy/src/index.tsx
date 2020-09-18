import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import '@sbb-mono/ui/src/styles/index.scss';

render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('quiz')
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'react-app-polyfill/ie11';
// import 'react-app-polyfill/stable';
// import './index.css';
// import App from './components/App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('quiz')
// );

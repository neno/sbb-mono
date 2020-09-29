import React from 'react';
import { render } from 'react-dom';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import App from './components/App';
import './fonts.scss';
import '@sbb-mono/ui/src/styles/index.scss';

render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('quiz')
);

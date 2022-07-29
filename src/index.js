import React from 'react';
import ReactDOM from 'react-dom/client';
import './variables.sass';
import './default.sass';
import './index.scss';
import App from './components/App/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

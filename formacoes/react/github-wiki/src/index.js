import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles.js';
import App from './pages/App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);


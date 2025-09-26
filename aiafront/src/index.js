// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ✅ Se importa el Router desde react-router-dom
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* ✅ Se mueve el <Router> aquí para envolver toda la app */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

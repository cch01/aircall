import './css/body.css';
import './css/app.css';
import './css/tailwind.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app'),
);

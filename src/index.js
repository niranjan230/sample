import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the App component
import './App.css'; // Import CSS if needed

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>,
  document.getElementById('root') // The root element in your HTML
);

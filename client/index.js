import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
// importing CSS file, webpack will bundle
import './scss/application.scss';

ReactDOM.render(<App />, document.getElementById('root'));
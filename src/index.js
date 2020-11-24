import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';// ./components/App === to ./components/App.js

/** BOOTSTRAPPING */
ReactDOM.render(
  <App />, //components look like tags, this one is _self closing_
  document.getElementById('app')
);
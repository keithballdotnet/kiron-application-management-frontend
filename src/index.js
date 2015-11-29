require('./index.css'); // Import styles for webpack

import './polyfills';

import ReactDOM from 'react-dom';
import React from 'react';

import Root from './views/root';
import * as api from './api';
import store from './store';

function start () {
  api.init();
  ReactDOM.render(<Root store={store}/>, document.getElementById('App'));
}

if (document.readyState === "complete" || document.readyState === "loaded") {
    start();
} else {
  document.addEventListener('DOMContentLoaded', start);
}

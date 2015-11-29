require('./index.css'); // Import styles for webpack

import * as _Q from 'es6-promise';
import fetch from 'whatwg-fetch';
import ReactDOM from 'react-dom';
import React from 'react';

_Q.polyfill();

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

require('./index.css'); // Import styles for webpack

import * as _Q from 'es6-promise';
import fetch from 'whatwg-fetch';
import ReactDOM from 'react-dom';
import React from 'react';

_Q.polyfill();

import App from './views/app.jsx';

function start () {
  ReactDOM.render(<App/>, document.getElementById('App')
  );
}

if (document.readyState === "complete" || document.readyState === "loaded") {
    start();
} else {
  document.addEventListener('DOMContentLoaded', start);
}

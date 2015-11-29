'use strict';

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createHashHistory from 'history/lib/createHashHistory';
import { reduxReactRouter } from 'redux-router';
import persistState from 'redux-localstorage'

import reducer from './reducers';
import {routes} from './views/root';

const create = compose(
  applyMiddleware(thunkMiddleware, createLogger()),
  reduxReactRouter({routes, history: createHashHistory()}),
  persistState(['auth'], {key: 'KIRON_STORE_AUTH'})
)(createStore);

export default create(reducer);

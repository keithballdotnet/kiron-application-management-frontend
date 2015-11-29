'use strict';

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createHashHistory from 'history/lib/createHashHistory';
import { reduxReactRouter } from 'redux-router';

import reducer from './reducers';
import {routes} from './views/root';

const create = compose(
  applyMiddleware(thunkMiddleware, createLogger()),
  reduxReactRouter({routes, history: createHashHistory()}),
)(createStore);

export default create(reducer);

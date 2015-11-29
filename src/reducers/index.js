'use strict';

import {combineReducers} from 'redux';
import {routerStateReducer as router} from 'redux-router';
import {reducer as form} from 'redux-form';

import auth from './auth';
import flash from './flash';
import application from './application';

export default combineReducers({
  router, form, auth, flash, application
});

export function createReducer (initialState, handler) {
  return (state = initialState, {type, payload}) => {
    if (handler[type]) {
      return handler[type](state, payload);
    } else {
      return state;
    }
  };
}

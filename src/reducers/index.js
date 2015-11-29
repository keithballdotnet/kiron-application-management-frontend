'use strict';

import {combineReducers} from 'redux';
import {routerStateReducer as router} from 'redux-router';
import {reducer as form} from 'redux-form';

import auth from './auth';

export default combineReducers({
  router, form, auth
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

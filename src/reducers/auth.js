'use strict';

import {createReducer} from './index';
import {
  AUTH_LOGIN_FAILED, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_REQUEST, AUTH_LOGOUT
} from '../constants/actions';

const initialState = {
  email: null,
  id: null,
  isLoggedIn: false,
  role: false
}

export default createReducer(initialState, {
  [AUTH_LOGIN_REQUEST]: function (state, payload) {
    console.log("AHAH", payload);
    return state;
  },

  [AUTH_LOGIN_SUCCESS]: function (state, payload) {
    return state;
  },

  [AUTH_LOGIN_FAILED]: function (state, payload) {
    return state;
  },

  [AUTH_LOGOUT]: function (state, payload) {
    return state;
  }
});

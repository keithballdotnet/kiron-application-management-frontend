'use strict';

import {createReducer} from './index';
import {
  AUTH_LOGIN_FAILURE, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_REQUEST, AUTH_LOGOUT
} from '../constants/actions';

const initialState = {
  email: null,
  id: null,
  isLoggedIn: false,
  role: false,
  inFlight: false
}

export default createReducer(initialState, {
  [AUTH_LOGIN_REQUEST]: function (state, payload) {
    return {...state, inFlight: true};
  },

  [AUTH_LOGIN_SUCCESS]: function (state, payload) {
    const {email, id, role} = payload;
    return {
      ...state, id, email, role, inFlight: false, isLoggedIn: true
    };
  },

  [AUTH_LOGIN_FAILURE]: function (state, payload) {
    return initialState;
  },

  [AUTH_LOGOUT]: function (state, payload) {
    return initialState;
  }
});

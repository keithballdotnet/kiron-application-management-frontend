'use strict';

import {pushState} from 'redux-router';

import syncActions from './sync';
import { flashAdd } from './flash';
import * as api from '../api';

export function authLoginRequest (email, password, next='/') {
  return dispatch => {
    dispatch(syncActions.authLoginRequest());
    api.login(email, password).then((res) => {
      dispatch(flashAdd({message: 'Logged in', level: 'success', clear: true}));
      dispatch(syncActions.authLoginSuccess(res));
      dispatch(syncActions.applicationReset());
      dispatch(pushState(null, next));
    }, (err) => {
      dispatch(flashAdd({message: 'Wrong username/password', level: 'error'}));
      console.warn(err);
    });
  }
}

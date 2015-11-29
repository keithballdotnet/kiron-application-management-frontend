'use strict';

import fetch from 'whatwg-fetch';

import { USER_ROLE } from './constants';

let _authToken = undefined;

function _storeToken () {
  localStorage.setItem('KIRON_AUTH_TOKEN', _authToken);
}

function _loadToken () {

  if (_authToken !== undefined) {
    return _authToken;
  }

  let storedToken = localStorage.getItem('KIRON_AUTH_TOKEN');
  if (!storedToken) {
    return _authToken = null;
  } else{
    let {token, expiry} = storedToken;
    if (expiry > Date.now()) {
      return _authToken = {token, expiry};
    } else {
      return _authToken = null;
    }
  }
}

export function init () {
  _loadToken();
}

export const token =  () => _authToken;
export const isLoggedIn = () => !!_authToken;

export function signUp ({firstName, lastName, email, password, userType}) {
  return Promise.resolve({'id': 1245}).then((res) => {
    return {
      result: {
        ...res,
        firstName, lastName, email, password,
        role: USER_ROLE.APPLICANT
      }
    };
  });
}

export function login ({email, password}) {
  if (email === 'c.lirsac@gmail.com' && password === '123456') {
    return Promise.resolve({
      result: {
        email, id: 1245, role: USER_ROLE.APPLICANT
      },
      token: 'FAKEASSTOKEN',
      token_expiry: Date.now() + 1000 * 60 * 60,
    });
  } else {
    return Promise.reject({error: 'Server Error', errorCode: 500});
  }
}

function _authorizedCall () {}

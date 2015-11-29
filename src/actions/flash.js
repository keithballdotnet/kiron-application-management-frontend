'use strict';

import _ from 'lodash';

import syncActions from './sync';

export const flashAdd = function (payload) {
  return dispatch => {
    const id = Date.now() + _.random(100);
    dispatch(syncActions.flashAdd({...payload, id}));
    const to = payload.timeout != undefined ? payload.timeout : 5000;
    if (to) {
      setTimeout(() => {
        dispatch(syncActions.flashRemove({id}));
      }, to);
    }
  }
}

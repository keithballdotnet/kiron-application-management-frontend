'use strict';

import _ from 'lodash';

import * as actionTypes from '../constants/actions';

function makeAction (type) {
  return (payload) => {
    return {type, payload };
  };
}

export default Object.keys(actionTypes).reduce((actions, type) => {
  return {
    ...actions,
    [_.camelCase(type)]: makeAction(type)
  }
}, {});

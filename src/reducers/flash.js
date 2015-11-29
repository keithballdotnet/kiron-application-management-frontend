'use strict';

import _ from 'lodash';

import {createReducer} from './index';
import { FLASH_ADD, FLASH_CLEAR, FLASH_REMOVE } from '../constants/actions';

const initialState = {};

export default createReducer(initialState, {
  [FLASH_ADD]: function (state, {id, level, message, clear}) {
    if (clear) {
      return { [id]: {level, message} };
    }
    return { ...state, [id]: {level, message} };
  },

  [FLASH_REMOVE]: function (state, {id}) {
    return _.omit(state, id);
  },

  [FLASH_CLEAR]: () => {}
})

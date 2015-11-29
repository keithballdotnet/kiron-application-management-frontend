'use strict';

import {createReducer} from './index';
import {
  APPLICATION_ADVANCE
} from '../constants/actions';

const initialState = {
  currentStage: 0,
  completed: [],
  data: {
    birthday: null,
    gender: null,
    nationality: null,
    phone: null,
    country: null,
    city: null,
    zip: null,
    address: null,
    addressExtra: null,
    studyProgram: null,
    previousEducation: null
  }
}

export default createReducer(initialState, {
  [APPLICATION_ADVANCE]: function (state, {stage, data}) {
    return state;
  },
});

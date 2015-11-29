'use strict';

import {createReducer} from './index';
import {
  APPLICATION_ADVANCE, APPLICATION_SWITCH_TO, APPLICATION_RESET
} from '../constants/actions';

const initialState = {
  stage: 0,
  completed: [],
  data: {
    1: {
      birthday: null,
      gender: null,
      nationality: null,
      phone: null,
      country: null,
      city: null,
      zip: null,
      address: null,
      addressExtra: null,
    },
    2: {
      studyProgram: null,
      previousEducation: null
    },
    3: {
      doc: []
    }
  }
}

export default createReducer(initialState, {
  [APPLICATION_ADVANCE]: function (state, {stage, data}) {
    return {
      ...state,
      completed: [...state.completed, stage],
      stage: stage + 1,
      data: { ...state.data, [stage]: data }
    };
  },

  [APPLICATION_SWITCH_TO]: function (state, {stage}) {
    return {...state, stage};
  },

  [APPLICATION_RESET]: () => initialState,
});

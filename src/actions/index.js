'use strict';

import _ from 'lodash';

import syncActions from './sync';
import * as flash from './flash';
import * as auth from './auth';

export default {
  _sync: syncActions,
  ...syncActions,
  ...flash,
  ...auth
}

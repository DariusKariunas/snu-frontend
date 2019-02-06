/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import * as C from './constants';

export const initialState = fromJS({
  isAuthenticated: false,
});

function appReducer(state = initialState, { type }) {
  switch (type) {
    case C.LOGIN:
      return state.set('isAuthenticated', true);
    case C.LOGOUT:
      return state.set('isAuthenticated', false);
    default:
      return state;
  }
}

export default appReducer;

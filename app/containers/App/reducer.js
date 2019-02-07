/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import * as C from './constants';

export const initialState = fromJS({
  isAuthenticated: false,
  user: {},
});

function appReducer(state = initialState, { type, payload }) {
  switch (type) {
    case C.LOGIN:
      return state.set('isAuthenticated', true).set('user', payload);
    case C.LOGOUT:
      return state.set('isAuthenticated', false).set('user', {});
    default:
      return state;
  }
}

export default appReducer;

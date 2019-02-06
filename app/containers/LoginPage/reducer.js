/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import * as C from './constants';

export const initialState = fromJS({
  redirectToReferrer: false,
  isLoading: false,
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case C.LOGIN:
      return state.set('isLoading', true);
    case C.LOGIN_SUCCESS:
      return state.set('redirectToReferrer', true).set('isLoading', false);
    case C.LOGIN_FAIL:
      return initialState;
    case C.DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default loginPageReducer;

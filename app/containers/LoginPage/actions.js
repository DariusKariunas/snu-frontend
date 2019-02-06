/*
 *
 * LoginPage actions
 *
 */

import * as C from './constants';

export function defaultAction() {
  return {
    type: C.DEFAULT_ACTION,
  };
}

export function login(loginData) {
  return {
    type: C.LOGIN,
    payload: loginData,
  };
}

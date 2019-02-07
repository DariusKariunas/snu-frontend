/*
 *
 * RegisterPage actions
 *
 */

import { DEFAULT_ACTION, REGISTER } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function register(data) {
  return {
    type: REGISTER,
    payload: data,
  };
}

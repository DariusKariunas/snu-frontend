/*
 *
 * App actions
 *
 */

import { DEFAULT_ACTION, TRACK_USER } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function trackUser() {
  return {
    type: TRACK_USER,
  };
}

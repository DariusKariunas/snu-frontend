import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the app state domain
 */

const selectAppDomain = state => state.get('app', initialState);

const selectRouter = state => state.get('router');

/**
 * Other specific selectors
 */

/**
 * Default selector used by App
 */

const makeSelectLocation = () =>
  createSelector(selectRouter, routerState =>
    routerState.get('location').toJS(),
  );

const makeSelectApp = () =>
  createSelector(selectAppDomain, substate => substate.toJS());

export default makeSelectApp;
export { selectAppDomain, makeSelectLocation };

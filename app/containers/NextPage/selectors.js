import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the nextPage state domain
 */

const selectNextPageDomain = state => state.get('nextPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by NextPage
 */

const makeSelectNextPage = () =>
  createSelector(selectNextPageDomain, substate => substate.toJS());

export default makeSelectNextPage;
export { selectNextPageDomain };

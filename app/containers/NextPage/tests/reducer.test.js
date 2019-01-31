import { fromJS } from 'immutable';
import nextPageReducer from '../reducer';

describe('nextPageReducer', () => {
  it('returns the initial state', () => {
    expect(nextPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});

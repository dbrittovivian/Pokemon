import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the trainersHome state domain
 */

const selectTrainersHomeDomain = state => state.trainersHome || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TrainersHome
 */

const makeSelectTrainersHome = () =>
  createSelector(
    selectTrainersHomeDomain,
    substate => substate,
  );

export default makeSelectTrainersHome;
export { selectTrainersHomeDomain };

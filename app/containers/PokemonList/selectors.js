import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pokemonList state domain
 */

const selectPokemonListDomain = state => state.pokemonList || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PokemonList
 */

const makeSelectPokemonList = () =>
  createSelector(
    selectPokemonListDomain,
    substate => substate,
  );

export default makeSelectPokemonList;
export { selectPokemonListDomain };

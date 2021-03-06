/**
 *
 * PokemonList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPokemonList from './selectors';
import reducer from './reducer';
import saga from './saga';

export function PokemonList() {
  useInjectReducer({ key: 'pokemonList', reducer });
  useInjectSaga({ key: 'pokemonList', saga });

  return <div />;
}

PokemonList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  pokemonList: makeSelectPokemonList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(PokemonList);

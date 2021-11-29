/**
 *
 * TrainersHome
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTrainersHome from './selectors';
import reducer from './reducer';
import saga from './saga';

export function TrainersHome() {
  useInjectReducer({ key: 'trainersHome', reducer });
  useInjectSaga({ key: 'trainersHome', saga });

  return (<div>
    Hii Trainer
    </div>);
}

TrainersHome.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  trainersHome: makeSelectTrainersHome(),
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

export default compose(withConnect)(TrainersHome);

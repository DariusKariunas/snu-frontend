/**
 *
 * HelpPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHelpPage from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class HelpPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>HelpPage</title>
          <meta name="description" content="Description of HelpPage" />
        </Helmet>
        <h1>Help page</h1>
      </div>
    );
  }
}

HelpPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  helpPage: makeSelectHelpPage(),
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

const withReducer = injectReducer({ key: 'helpPage', reducer });
const withSaga = injectSaga({ key: 'helpPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HelpPage);

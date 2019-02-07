/**
 *
 * App
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router-dom';

import LoginPage from 'containers/LoginPage';
import HelpPage from 'containers/HelpPage';
import RegisterPage from 'containers/RegisterPage';

import HomePage from 'containers/HomePage/Loadable';
import NextPage from 'containers/NextPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectApp, { makeSelectLocation } from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import AuthRoute from './AuthRoute';

class App extends React.Component {
  componentWillMount() {
    this.props.actions.trackUser();
  }

  render() {
    const {
      app: { isAuthenticated },
    } = this.props;
    return (
      <div>
        <Switch>
          <AuthRoute
            isAuthenticated={isAuthenticated}
            exact
            path="/"
            component={HomePage}
          />
          <AuthRoute
            isAuthenticated={isAuthenticated}
            exact
            path="/help"
            component={HelpPage}
          />
          <Route exact path="/regist" component={RegisterPage} />
          <Route exact path="/nextPage" component={NextPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  app: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    trackUser: PropTypes.func.isRequired,
  }),
};

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
  location: makeSelectLocation(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'app', reducer });
const withSaga = injectSaga({ key: 'app', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(App);

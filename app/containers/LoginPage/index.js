/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form/immutable';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import style from './style.scss';

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.Component {
  onSubmit = data => {
    this.props.actions.login(data.toJS());
  };

  render() {
    const {
      handleSubmit,
      state: { redirectToReferrer, isLoading },
    } = this.props;
    const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <div className={style.login}>
        <Helmet>
          <title>LoginPage</title>
          <meta name="description" content="Description of LoginPage" />
        </Helmet>
        <h1>Login page</h1>
        {isLoading && <p>Loading,,,</p>}
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field type="text" name="userName" component="input" />
          <Field type="password" name="password" component="input" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

LoginPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.object,
  }),
  actions: PropTypes.shape({
    login: PropTypes.func.isRequired,
  }),
  state: PropTypes.shape({
    redirectToReferrer: PropTypes.bool.isRequired,
  }),
};

const mapStateToProps = createStructuredSelector({
  state: makeSelectLoginPage(),
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

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

const withForm = reduxForm({ form: 'login' });

export default compose(
  withReducer,
  withSaga,
  withForm,
  withConnect,
)(LoginPage);

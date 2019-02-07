/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Redirect, Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form/immutable';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Input from 'components/Input';
// import RegisterPage from 'components/RegisterPage';
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

        <h1 className={style.center}>Login page</h1>
        {isLoading && <p>Loading,,,</p>}
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className={style.center}>
            <Field
              type="email"
              name="email"
              component={Input}
              placeholder="User name..."
            />
          </div>
          <div className={style.center}>
            <Field
              type="password"
              name="password"
              component={Input}
              placeholder="Password..."
            />
          </div>
          <div className={style.center}>
            <button type="submit">Login</button>
          </div>
          <div className={style.center}>
            <Link to="/regist">Not a member?</Link>
          </div>
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

function validate(valuesMap) {
  const values = valuesMap.toJS();
  const errors = {};
  if (!values.password || values.password.trim() === '') {
    errors.password = 'Password is Required!';
    console.log(errors.password);
  } else if (values.password.length <= 6) {
    errors.password = 'Password is too short!';
    console.log(errors.password);
  }

  return errors;
}

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

const withForm = reduxForm({ form: 'login', validate });

export default compose(
  withReducer,
  withSaga,
  withForm,
  withConnect,
)(LoginPage);

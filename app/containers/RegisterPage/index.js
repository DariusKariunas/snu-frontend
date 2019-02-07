/**
 *
 * RegisterPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { reduxForm, Field } from 'redux-form/immutable';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Input from 'components/Input';
import makeSelectRegisterPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import style from './style.scss';

/* eslint-disable react/prefer-stateless-function */
export class RegisterPage extends React.Component {
  onSubmit = data => {
    console.log(data);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className={style.register}>
        <Helmet>
          <title>RegisterPage</title>
          <meta name="description" content="Description of RegisterPage" />
        </Helmet>
        <h1 className={style.center}>Registration</h1>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className={style.center}>
            <Field
              type="text"
              name="userName"
              component={Input}
              placeholder="User name..."
            />
          </div>
          <div className={style.center}>
            <Field
              type="text"
              name="email"
              component={Input}
              placeholder="E.mail..."
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
            <Field
              type="password"
              name="password2"
              component={Input}
              placeholder="Repeat Password..."
            />
          </div>
          <div className={style.center}>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.object,
  }),
  state: PropTypes.shape({
    redirectToReferrer: PropTypes.bool.isRequired,
  }),
};

const mapStateToProps = createStructuredSelector({
  registerPage: makeSelectRegisterPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function validate(valuesMap) {
  const values = valuesMap.toJS();
  const errors = {};
  if (!values.userName || values.userName.trim() === '') {
    errors.userName = 'User Name is Required!';
    console.log(errors.userName);
  } else if (values.userName.length <= 6) {
    errors.userName = 'User Name is too short!';
    console.log(errors.userName);
  }
  if (!values.password || values.password.trim() === '') {
    errors.password = 'Password is Required!';
    console.log(errors.password);
  } else if (values.password.length <= 6) {
    errors.password = 'Password is too short!';
    console.log(errors.password);
  }

  return errors;
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'registerPage', reducer });
const withSaga = injectSaga({ key: 'registerPage', saga });
const withForm = reduxForm({ form: 'login', validate });

export default compose(
  withReducer,
  withSaga,
  withForm,
  withConnect,
)(RegisterPage);

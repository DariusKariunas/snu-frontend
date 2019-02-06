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
import { Link } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHelpPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import style from './style.scss';

/* eslint-disable react/prefer-stateless-function */
export class HelpPage extends React.Component {
  componentWillMount() {
    console.log('uzsimausiu');
  }

  componentDidMount() {
    console.log('uzsimoviau');
  }

  componentDidUpdate() {
    console.log('atsinaujinau');
  }

  componentWillUnmount() {
    console.log('uzsidarau');
  }

  render() {
    return (
      <div className={style.helpPage}>
        <Helmet>
          <title>HelpPage</title>
          <meta name="description" content="Description of HelpPage" />
        </Helmet>
        <h1>Help page</h1>

        <div className={style.buttongroup}>
          <Link to="/">
            <button className={style.button} type="button">
              Home Page
            </button>
          </Link>

          <Link to="/nextPage">
            <button className={style.button} type="button">
              Next Page
            </button>
          </Link>

          <Link to="/">
            <button className={style.button} type="button">
              Click Me!
            </button>
          </Link>
        </div>
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

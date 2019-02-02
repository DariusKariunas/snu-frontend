/**
 *
 * NextPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Map from 'components/Map';
import { Link } from 'react-router-dom';

import makeSelectNextPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import style from './style.scss';



/* eslint-disable react/prefer-stateless-function */
export class NextPage extends React.Component {

  onButtonClick = () => {
    console.log('click');
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>NextPage</title>
          <meta name="description" content="Description of NextPage" />
        </Helmet>
        <h1>Next page</h1>
        <p>This is my new page</p>
        <div>
        <Link to="/">
          <button className={style.button} type="button">
            Home Page
          </button>
        </Link>

        <Link to="/help">
          <button className={style.button} type="button">
            To HELP
          </button>
        </Link>

        <Link to="/">
          <button className={style.button} type="button">
            Click Me!
          </button>
        </Link>
        </div>
        
        <div className={style.map}>
          <Map/>
        </div>
        

      </div>
    );
  }
}

NextPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  nextPage: makeSelectNextPage(),
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

const withReducer = injectReducer({ key: 'nextPage', reducer });
const withSaga = injectSaga({ key: 'nextPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NextPage);

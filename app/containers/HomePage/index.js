/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Map from 'components/Map';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import style from './style.scss';
import makeSelectApp from '../App/selectors';

class HomePage extends React.PureComponent {
  componentWillMount() {
    console.log(this.props);
  }

  render() {
    const {
      app: { user },
    } = this.props;
    return (
      <div className={style.homePage}>
        <div className={style.map}>
          <button type="button" className={style.buttonLogin}>
            {user.email}
          </button>
          <Map />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  app: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(HomePage);

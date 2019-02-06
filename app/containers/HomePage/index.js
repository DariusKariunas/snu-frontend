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
import Map from 'components/Map';
import style from './style.scss';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  state = {
    tic: 0,
    tickerFunc: null,
  };

  componentWillMount() {
    const tickerFunc = setInterval(this.incrementTic, 1000);
    this.setState({ tickerFunc });
  }

  componentDidMount() {
    console.log('uzsimoviau');
  }

  componentDidUpdate() {
    console.log('atsinaujinau');
  }

  componentWillUnmount() {
    console.log('uzsidarau');
    clearInterval(this.state.tickerFunc);
  }

  incrementTic = () => {
    this.setState(prevState => ({ tic: prevState.tic + 1 }));
  };

  render() {
    return (
      <div className={style.homePage}>
        <div className={style.map}>
          <button type="button" className={style.buttonLogin}>
            Login
          </button>
          <p className={style.ticker}>{this.state.tic}</p>
          <Map />
        </div>
      </div>
    );
  }
}

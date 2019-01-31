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
import { Link } from 'react-router-dom';
import style from './style.scss';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  state = {
    tic: 0,
    tickerFunc: null,
    text: '',
  };

  componentWillMount() {
    const tickerFunc = setInterval(this.incrementTic, 500);
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

  onButtonClick = () => {
    console.log('click');
  };

  onInputChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div className={style.homePage}>
        <h1>Home page {this.state.text}</h1>
        <Link to="/help">Go to help</Link>
        <Link to="/nextpage">Go to next page</Link>
        <p>{this.state.tic}</p>
        <button className={style.button} type="button" onClick={this.onButtonClick}>
          Click
        </button>
        <input
          onChange={this.onInputChange}
          className={style.input}
          type="text"
        />
      </div>
    );
  }
}

/**
 *
 * MapMarker
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import style from './style.scss';

function MapMarker({ text }) {
  return (
    <div className={style.marker} >
    {text}
    </div>
  );
}

MapMarker.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MapMarker;

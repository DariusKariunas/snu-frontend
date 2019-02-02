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

function MapMarker({ text, pic }) {
  return (
    <div className={style.marker} >
    {text}
    <img className={style.markerPic} src={pic} alt="ad"/>
    </div>
  );
}

MapMarker.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MapMarker;

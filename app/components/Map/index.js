/**
 *
 * Map
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */

import GoogleMapReact  from 'google-map-react';
import MapMarker from 'components/MapMarker';

const DataArray = [
  {
      lat: '54.90081494798153',
      lng: '23.895662339541786',
      text: 'On sale',
      pic: 'data:image/jpeg;base64,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'
  },
  {
    lat: '53.9',
    lng: '24.8',
    text: 'ASaa',
  }

]


class MyMap extends React.Component {
  
  render() {
    return (
        <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        bootstrapURLKeys={{ key: 'AIzaSyA3mCTqdLJTjE6XPFG_hKr6d9NQyPXk1_c' }}
      >
      {DataArray.map( (markerData) => ( 
        <MapMarker
        
          key={markerData.text}
          lat={markerData.lat}
          lng={markerData.lng}
          text={markerData.text}
          pic={markerData.pic}
        />
       ))}
       </GoogleMapReact>
    );
  }
}
  
  
MyMap.propTypes = {};

MyMap.defaultProps = {
  center: {lat: 54.90081494798153, lng: 23.895662339541786},
  zoom: 11
}


export default MyMap
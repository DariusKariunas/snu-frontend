/**
 *
 * Map
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
/* eslint-disable react/prefer-stateless-function */

import GoogleMapReact from 'google-map-react';
import MapMarker from 'components/MapMarker';

const DataArray = [
  {
    lat: '54.90081494798153',
    lng: '23.895662339541786',
    text: 'On sale',
    pic: 'https://c1.staticflickr.com/9/8452/7936998300_6ab78565ff_b.jpg',
  },
  {
    lat: '53.9',
    lng: '24.8',
    text: 'ASaa',
    pic:
      'https://cloud.lovindublin.com/images/_relatedEntryImage2x/Latte-Heart-Main.jpg?mtime=20181112151459',
  },
  {
    lat: '54.903',
    lng: '23.91',
    text: 'Hot sale',
    pic: 'https://c1.staticflickr.com/9/8452/7936998300_6ab78565ff_b.jpg',
  },
  {
    lat: '54.8',
    lng: '23.9',
    text: 'Home sale',
    pic: 'https://c1.staticflickr.com/9/8452/7936998300_6ab78565ff_b.jpg',
  },
];

class MyMap extends React.Component {
  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        bootstrapURLKeys={{ key: 'AIzaSyA3mCTqdLJTjE6XPFG_hKr6d9NQyPXk1_c' }}
      >
        {DataArray.map(markerData => (
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

MyMap.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number,
};

MyMap.defaultProps = {
  center: { lat: 54.90081494798153, lng: 23.895662339541786 },
  zoom: 11,
};

export default MyMap;

import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {
   render() {
   const defaultMapOptions = {
      fullscreenControl: false,
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false,
      featureType: 'landscape.natural', 
      stylers: [{ visibility: 'off' }] 
    };
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 6.2170, lng: -75.567 } }
        defaultZoom = { 13 }
        defaultOptions={defaultMapOptions}
      >
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: '700px', width: '100%'}} /> }
          mapElement={ <div style={{ height: '100%' , overflowY: 'auto', overflowX:'auto'}} /> }
        />
      </div>
   );
   }
};
export default Map;
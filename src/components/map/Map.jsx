import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};

const Map = ({ location, zoomLevel }) => (
    <div className="map">
  
      <div className="google-map"     
      onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.google.com/maps/search/?api=1&query=33.158456,129.735934&query_place_id=ChIJN678Q4CWajURtJXLCnmjVRw';
      }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAKQDIK-TRpT1IXBuP3nsfFUISEQoLCK0o' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
          yesIWantToUseGoogleMapApiInternals 
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )

  export default Map
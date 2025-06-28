import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const kigaliCoordinates = {
  lat: -1.9509, // Latitude for Kigali
  lng: 30.0619, // Longitude for Kigali
};

const MyGoogleMap = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyD-EXAMPLEKEY1234567890ABCDEF"> 
      <GoogleMap mapContainerStyle={containerStyle} center={kigaliCoordinates} zoom={12}>
        <Marker position={kigaliCoordinates} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyGoogleMap;

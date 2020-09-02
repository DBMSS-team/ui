import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { homedir } from 'os';


const Home = () => (
  <div>
    <GooglePlacesAutocomplete
      apiKey="AIzaSyBytV1ivXfD_04sWdEPdzsOue5xngX_Q2c"
    />
  </div>
);


export default Home;
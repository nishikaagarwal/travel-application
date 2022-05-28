import React, {useState, useEffect} from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import {getPlacesData} from './api/index.js';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import PlaceDetails from './Components/PlaceDetails/PlaceDetails';
import Map from './Components/Map/Map';

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({ lat:0, lng:0});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=>{
      setCoordinates({lat: latitude, lng: longitude});
    })
  }, [])

  useEffect(() => {
    
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      console.log(data);
      setPlaces(data)
    });
  }, [coordinates,bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List places={places}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;

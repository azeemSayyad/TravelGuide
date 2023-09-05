import React, { useState, useEffect } from "react";
import {  Grid } from '@material-ui/core';

import getPlacesData from './api';

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {

    const [bounds, setBounds] = useState({});
    const [places, setPlace] = useState([]);
    const [autoComplete, setAutoComplete] = useState(null)

    const [coordinates, setCoordinates] = useState({ lat: 17.385044, lng: 78.486671 });//Hyderabad location
    const [childClicked, setChildClicked] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState(0);
    const [filteredPlaces, setFilteredPlaces] = useState([])

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
    //         setCoordinates({ lat: latitude, lng: longitude })
    //     })
    // }, [])

    useEffect(() => {
        const fp = places?.filter((place) => Number(place.rating) > Number(rating))
        setFilteredPlaces(fp)
    }, [rating])

    const onLoad = (autoC) => {
        setAutoComplete(autoC)//set searched place in autocomplete state
    };

    const onPlaceChanged = () => {
        const lat = autoComplete?.getPlace().geometry.location.lat();
        const lng = autoComplete?.getPlace().geometry.location.lng();

        setCoordinates({ lat, lng });
    };

    useEffect(() => {
        if (bounds.ne && bounds.sw) {
            setIsLoading(true)
            getPlacesData(type, bounds.sw, bounds.ne)
                .then((data) => {
                    setPlace(data);
                    console.log(`data in app-> ${type} `, data);
                    setIsLoading(false)
                })
        }
    }, [type, bounds])
    return (
        <>
            <Header onLoad={onLoad} onPlaceChanged={onPlaceChanged} />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4} >
                    <List
                        places={filteredPlaces?.length ? filteredPlaces : places}
                        childClicked={childClicked}
                        isLoading={isLoading}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                </Grid>
                <Grid item xs={12} md={8} style={{ border: '3px' }} >
                    <Map
                        setBounds={setBounds}
                        setCoordinates={setCoordinates}
                        coordinates={coordinates}
                        places={filteredPlaces.length ? filteredPlaces : places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </>
    );
}
export default App;
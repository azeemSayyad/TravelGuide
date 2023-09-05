import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, useMediaQuery, Typography, Grid } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOn.js';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style.js';

const Map = ({ setBounds, setCoordinates, coordinates, places, setChildClicked }) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width):600px');



    return (
        <div className={classes.mapContainer}>

            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDwaQuEnAKuYs1Byet3hEHO6xh2x8Mv2yo' }}
                defaultCenter={{ lat: 43.19692670798369, lng: -77.72219971873781 }}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                onChange={(e) => {
                    console.log("event -> ", e)
                    console.log("MarginBounds-> SW ", e.marginBounds.sw, "NE", e.marginBounds.ne)
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                    setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne })
                }}
                onChildClick={(child) => setChildClicked(child)}>
                {places?.map((place, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={place.latitude}
                        lng={place.longitude}
                        key={i}
                    >
                        {
                            isMobile ? (
                                <LocationOnOutlinedIcon color='primary' fontsize='large' />
                            ) : (
                                <Paper elevation={1} className={classes.paper}>
                                    <Typography gutterBottom className={classes.typography} variant='subtitle2'>{place.name}</Typography>
                                    <img src={place.photo ? place.photo.images.large.url : ""}
                                        alt={place.name} />
                                    <Rating size='small' value={Number(place.rating)} readOnly />
                                </Paper>
                            )
                        }
                    </div>
                ))}
            </GoogleMapReact >
        </div>
    );
}

export default Map;
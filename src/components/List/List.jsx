import React, { useState, createRef, useEffect } from 'react';
import { Select, Typography, CircularProgress, InputLabel, FormControl, Grid, MenuItem } from '@material-ui/core';
import useStyles from './style.js';
import PlaceDetails from '../PlaceDetails/PlaceDetails';



const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {
    const classes = useStyles();
    const [elRef, setElRef] = useState(null)
    useEffect(() => {
        setElRef((elRef) => Array(places?.length).fill().map((_, i) => elRef[i] || createRef()));
    }, [places]);

    return (
        <div className={classes.container}>
            <Typography variant='h5'>Restaurants, Hotels and Attraction around you</Typography>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size='5rem' />
                </div>
            ) : (
                <>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Type</InputLabel>
                        <Select value={type} onChange={(e) => setType(e.target.value)}>
                            <MenuItem value='restaurants'>Restaurants</MenuItem>
                            <MenuItem value='hotels'>Hotels</MenuItem>
                            <MenuItem value='attractions'>attractions</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Rating</InputLabel>
                        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                            <MenuItem value='0'>All</MenuItem>
                            <MenuItem value='3'>Above 3.0</MenuItem>
                            <MenuItem value='4'>Above 4.0</MenuItem>
                        </Select>
                    </FormControl>
                    <Grid container spacing={3} className={classes.list}>
                        {places?.length === 0 ?
                            (
                                <Grid container justifyContent='center' spacing={4} alignItems='center' className={classes.loading}>
                                    <Typography  size='large'>{type}'s are not available at this place</Typography>
                                </Grid>
                            ) :
                            (

                                places?.map((place, i) => (
                                    <Grid ref={elRef[i]} item key={i} xs={12}>
                                        <PlaceDetails
                                            place={place}
                                            selected={Number(childClicked) === i}
                                            refProp={elRef[i]}
                                        />
                                    </Grid>
                                ))
                            )
                        }
                    </Grid>
                </>
            )}
        </div>
    );
}

export default List;
import React from 'react';
import { Box, Chip, Typography, Button, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating';

import useStyles from './style';

const PlaceDetails = ({ place , selected ,refProp}) => {
    // console.log("placeDetails", place)
    const classes = useStyles();
    if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return (
        <Card elevation={6}>
            <CardMedia
                style={{ height: '200px' }}
                image={place.photo ? place.photo.images.large.url : "https://www.bing.com/images/search?view=detailV2&ccid=bH7WM%2bVt&id=C3865231974DBCC5756BB72B7C210646A444B3C5&thid=OIP.bH7WM-VtYKtpDp5Unwr6iAHaE3&mediaurl=https%3a%2f%2fstatic.cwi.it%2fwp-content%2fuploads%2f2019%2f12%2frapidapi-logo-640.png&exph=420&expw=640&q=rapidapi&simid=608032056559954062&FORM=IRPRST&ck=FF9EFA06B6F391A311156F61E34C1E69&selectedIndex=31"}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>{place.name}</Typography>
                <Box display='flex' justifyContent='space-between'>
                    <Rating size='small' value={Number(place.rating)} readOnly/>
                    <Typography gutterBottom variant='subtitle3'>out of {place.num_reviews} reviews</Typography>
                </Box>
                {place?.price && (
                    <Box display='flex' justifyContent='space-between'>
                        <Typography gutterBottom variant='subtitle2'>Price</Typography>
                        <Typography gutterBottom variant='subtitle3'>{place.price}</Typography>
                    </Box>
                )}
                <Box display='flex' justifyContent='space-between'>
                    <Typography gutterBottom variant='subtitle2'>Ranking</Typography>
                    <Typography gutterBottom variant='subtitle3'>{place.ranking}</Typography>
                </Box>
                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size='small' label={name} className={classes.chip} />
                ))}
                {place?.address && (
                    <Typography variant='subtitle4' gutterBottom color='textPrimary' className={classes.subtitle}>
                        <LocationOnIcon />{place.address}
                    </Typography>
                )}
                {place?.phone && (
                    <Typography variant='subtitle4' gutterBottom className={classes.subtitle}>
                        <PhoneIcon/> {place.phone}
                    </Typography>
                )}
                <CardActions>
                    <Button size='small' color='primary' onClick={()=>window.open(place.web_url,'_blank')}>Reviews</Button>
                    <Button size='small' color='primary' onClick={()=>window.open(place.website,'_blank')}>website</Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default PlaceDetails;
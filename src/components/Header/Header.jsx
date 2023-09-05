import React  from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Typography, Box, Toolbar, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './style.js';

const Header = ({ onLoad,onPlaceChanged }) => {
    const classes = useStyles();

    return (
        // <h1>Executed</h1>
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>

                <Typography variant='h5' className={classes.title}>
                    Travel Guide
                </Typography>

                <Box display='flex'>

                    <Typography variant='h6' className={classes.title}>
                        Explore New Places
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder='search....' classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                    </Autocomplete>

                </Box>
            </Toolbar>

        </AppBar>
    );
}

export default Header;
            // </Autocomplete>
            // <Autocomplete onLoad='onLoad' onPlaceChanged='onPlaceChanged'>
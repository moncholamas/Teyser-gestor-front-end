import React from 'react';
import {Box, Grid,Typography} from '@material-ui/core';

export function Footer(){
    return (
        <Box component="footer" sx={{
            height: 200,
            bgcolor: "primary",
            color:"primary",
            marginTop: 30
        }}>
            <Grid container>
                <Grid item xs={6}>
                    <Typography variant="h6" color="inherit" >Pie de pagina</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>Mas info pie de pagina</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
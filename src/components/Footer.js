import React from 'react';
import {Box, Divider, Grid,Typography} from '@material-ui/core';

export function Footer(){
    return (
        <>
        <Divider></Divider>
        <Box component="footer" sx={{
            height: 100,
            marginTop: 30,
            padding: 20
        }}>
        
            <Grid container>
                <Grid item xs={6}>
                    <Box color="primary">
                        <Typography variant="h6" color="inherit" align="center" >Pie de pagina</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body1" color="inherit" align="center" >Mas info pie de pagina</Typography>
                </Grid>
            </Grid>
        </Box>
        </>
    );
}
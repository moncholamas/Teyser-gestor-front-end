import React from 'react';
import {Box, Divider, Grid,Typography} from '@material-ui/core';

export function Footer(){
    return (
        <>
        <Divider></Divider>
        <Box component="footer" sx={{
            height: 50,
            marginTop: 30,
            padding: 20,
            bgcolor: 'primary'
        }}>
        
            <Grid container>
                <Grid item xs={6}>
                    <Typography variant="body1" color="textPrimary" align="center" >Mas info pie de pagina</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Box color="text.primary" clone>
                        <Typography variant="body2" color="textPrimary" align="center" >Teyser - Gestor | 2021</Typography>
                    </Box>
                </Grid>
                
            </Grid>
        </Box>
        </>
    );
}
import { Grid, Typography } from '@mui/material';
import React from 'react';

export function Acerca(){
    return (
        <>
        <Grid item xs={10}>
        <Typography variant="h3" align="center">
            Acerca de Teyser
        </Typography>
        <Typography variant="h6" align="left">
            ¿Por qué?
        </Typography>
        <Typography variant="body1" align="left">
            Lorem 
        </Typography>
        </Grid>
        
        </>
    );
}
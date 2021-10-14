import { Grid, Typography } from '@mui/material';
import React from 'react';

export function Home(){
    return (
        <>
        <Grid item xs={10}>
        <Typography variant="h3" align="center">
            Bienvenido a Teyser
        </Typography>
        <Typography variant="h6">
            Puede iniciar sesión para continuar haciendo click aquí
            o también puede registrarse si es la primera vez que ingresa.
        </Typography>
        <Typography variant="body1">
            ¿Quiénes somos?
        </Typography>
        </Grid>
        
        </>
    );
}
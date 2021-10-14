import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export function Home(){
    return (
        <>
        <Grid item xs={10} mt={3}>
            <Typography variant="h3" align="center">
                Bienvenido
            </Typography>
            <Typography variant="body1" align="center">
                Puede comenzar, <Link to="/login">iniciando sesión</Link>
            </Typography>
        </Grid>
        </>
    );
}
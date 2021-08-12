import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'wouter';

export function Home(){
    return (
        <>
        <Grid item xs={10} mt={3}>
            <Typography variant="h3" align="center">
                Bienvenido
            </Typography>
            <Typography variant="body1" align="center">
                Puede comenzar, <Link href="/login">iniciando sesión</Link>
            </Typography>
        </Grid>
        </>
    );
}
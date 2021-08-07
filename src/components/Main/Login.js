import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import {Link as WLink} from 'wouter';
import React from 'react';

export function Login(){
    return (
        <>
        <Grid item xs={10} mt={3}>
            <Typography variant="h3" align="center">
                Bienvenido
            </Typography>
            <Typography variant="h6" align="center">
                Inicie sesión para comenzar
            </Typography>
        </Grid>
        
        <Grid item xs={10}>
            <Box component="form" textAlign="center" mt={3}>
                <TextField
                    id="outlined-helperText"
                    label="Usuario"
                    defaultValue="Usuario"
                    variant="outlined"
                />
                <br/><br/>
                <TextField
                    id="outlined2-helperText"
                    label="Clave"
                    defaultValue=""
                    variant="outlined"
                />
                <br/><br/>
                <Button color="primary" variant="contained" size="large">
                    Entrar
                </Button>
                <br/><br/>
                <WLink href="/nuevo" component={Link}>
                    <Link variant="body2">
                        Crear una cuenta.
                    </Link> 
                </WLink>
            </Box>
        </Grid>
        
        </>
    );
}
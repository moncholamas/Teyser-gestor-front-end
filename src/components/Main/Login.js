import { Box, Divider, TextField, Typography } from '@material-ui/core';
import React from 'react';

export function Login(){
    return (
        <>
        <Typography variant="h3" align="center">
            Bienvenido
        </Typography>
        <Typography variant="h6" align="center">
            Inicie sesión para comenzar
        </Typography>
        <Box component="form" textAlign="center" mt={3}>
            <TextField
                id="outlined-helperText"
                label="Usuario"
                defaultValue="Usuario"
                variant="outlined"
            />
            <br/><br/><br/>
            <TextField
                id="outlined2-helperText"
                label="Clave"
                defaultValue=""
                variant="outlined"
            />
        </Box>
        </>
    );
}
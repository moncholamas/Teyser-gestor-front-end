import { Box, TextField, Typography, Grid, Button } from '@material-ui/core';
import { LinkedIn, WhatsApp } from '@material-ui/icons';
import React from 'react';

export function Contacto(){
    return (
        <>
        <Grid item xs={10}>
                <Typography variant="h3" align="center">
                    Contactá con nosotros
                </Typography>
                <Typography variant="h6" align="center">
                    Envianos un mensaje:
                </Typography>
        </Grid>
        
        <Grid item xs={5}>
            <Box component="form" textAlign="center" >
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
                    Enviar
                </Button>
                <Button color="secondary" variant="contained" size="large">
                    Borrar
                </Button>
            </Box>
        </Grid>
        <Grid item xs={4} align="center">
            <Typography variant="body1">
                Redes sociales:
            </Typography>
            <Button 
                color="primary" 
                variant="contained" 
                size="large"
                startIcon={<WhatsApp/>}
            >
                WhatsApp
            </Button>
            <br/><br/>
            <Button 
                color="primary" 
                variant="contained" 
                size="large"
                startIcon={<LinkedIn/>}
            >
                Linkedin
            </Button>
        </Grid>
        </>
    );
}
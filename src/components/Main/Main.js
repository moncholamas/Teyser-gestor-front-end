import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { Route } from 'wouter';
import { Login } from '../../Pages/Login';
import { Contacto } from '../../Pages/Contacto';
import { Acerca } from '../../Pages/Acerca';
import { Logup } from '../../Pages/Logup';
import { Home } from '../../Pages/Home';

export function Main (){
    //llamar un componente distinto segun la ruta
    return (
        <Box
        sx={{
            padding: 20,
            paddingX: 5,   
            minHeight: 450
        }}
        >
            <Grid container height={450}>
                <Route path="/">
                    <Home></Home>
                </Route>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/nuevo">
                    <Logup></Logup>
                </Route>
                <Route path="/contacto">
                    <Contacto></Contacto>
                </Route>
                <Route path="/acerca">
                    <Acerca></Acerca>
                </Route>
             </Grid>
        </Box>
    );
}
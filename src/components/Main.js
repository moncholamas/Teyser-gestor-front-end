import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { Route } from 'wouter';
import { Login } from './Main/Login';
import { Contacto } from './Main/Contacto';
import { Acerca } from './Main/Acerca';
import { Logup } from './Main/Logup';
import { Home } from './Main/Home';

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
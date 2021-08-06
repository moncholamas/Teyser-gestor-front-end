import React from 'react';
import {Box, Grid, Typography} from '@material-ui/core';
import {Route} from 'wouter';
import { Login } from './Main/Login';
import { Contacto } from './Main/Contacto';
import { Acerca } from './Main/Acerca';

export function Main (){
    //llamar un componente distinto segun la ruta
    return (
        <Box
        sx={{
            marginTop:3,
            padding:3,
            height: 450

        }}
        >
            <Grid container height={450}>
            
                <Route path="/">
                    <Login></Login>
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
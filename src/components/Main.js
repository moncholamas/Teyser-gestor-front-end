import React from 'react';
import {Box, Typography} from '@material-ui/core';
import {Route} from 'wouter';
import { Login } from './Main/Login';

export function Main (){
    //llamar un componente distinto segun la ruta
    return (
        <Box sx={{
            height:500
        }}>
        <Route path="/">
            <Login></Login>
        </Route>
        <Route path="/clientes">
            <Typography variant="h3">
                Hola esto es para clientes
            </Typography>
        </Route>
        </Box>
    );
}
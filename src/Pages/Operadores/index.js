import { Typography } from '@material-ui/core';
import React from 'react';
import { Route } from 'react-router';
import { Operador } from './Operador';


export function Operadores(){
    
    return (
        <>
            
            
            <Route path="/operadores/:id" component={Operador} >
                
            </Route>
            <Route exact path="/operadores"  >
                <Typography variant="h2">
                    Bienvenidos a Operadores
                </Typography>
            </Route>
        </>
    )
}
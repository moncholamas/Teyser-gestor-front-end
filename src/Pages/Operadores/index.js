import { Typography } from '@material-ui/core';
import React from 'react';
import { Route } from 'react-router';
import { Operador } from './Operador';


export function Operadores(props){
    return (
        <>  
        {console.log(props)}
            <Route path="/operadores/:id">
                <Operador {...props}/>            
            </Route>

            <Route exact path="/operadores"  >
                <Typography variant="h2">
                    Bienvenidos a Operadores
                </Typography>
            </Route>

            <Typography variant="body2">
                {props.status.msj}
            </Typography>
        </>
    )
}
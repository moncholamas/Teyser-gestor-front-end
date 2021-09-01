import {  Typography } from '@material-ui/core';
import React from 'react';
import {useParams} from 'react-router-dom';

export function Operador(){
    const operador = useParams();
    return (
        <>
            <Typography variant="h3" align="center">
                Bienvenido {operador.id}
                
            </Typography>
        </>
    )
}
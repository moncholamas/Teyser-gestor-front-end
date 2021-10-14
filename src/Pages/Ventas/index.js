import {  Divider, Typography } from '@mui/material';
import React from 'react';


export function Venta(props){
    
    
    return (
        <>
            <Typography variant="h4" align="center">
                Ventas
            </Typography>
            <Divider></Divider>
            <Typography variant="body1" align="center">
                Ingrese una nueva venta
            </Typography>      
        </>
    )
}
import { Button, Typography } from '@material-ui/core';
import React from 'react';


export function MiCuenta(){
    
    return (
        <>
            <Typography variant="h2">
                Bienvenidos a Mi Cuenta
                <Button >
                    Cerrar Sesión
                </Button>
            </Typography>
        </>
    )
}
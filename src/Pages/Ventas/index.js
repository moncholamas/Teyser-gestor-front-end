import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useAuthDispatch, useAuthState,logout } from '../../context';



export function Venta(){
    
    const dispatch = useAuthDispatch();
    const token = useAuthState();
    const logOutHandle = ()=>{
            logout(dispatch);
            console.log("se deslogeó")
            //setLocation('/');
    }
    return (
        <>
            <Typography variant="h2">
                {console.log(token)}
                Bienvenidos a ventas
                <Button onClick={logOutHandle}>
                    Cerrar Sesión
                </Button>
            </Typography>
        </>
    )
}
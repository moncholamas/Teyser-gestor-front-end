import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useAuthDispatch, useAuthState,logout } from '../../context';



export function Venta(props){
    
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
                | estas en {props.location.pathname}
                <Button onClick={logOutHandle}>
                    Cerrar Sesión
                </Button>
            </Typography>
        </>
    )
}
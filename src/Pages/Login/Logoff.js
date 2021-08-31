import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { useAuthDispatch, useAuthState,logout } from '../../context';



export function Logoff(props){
    
    const dispatch = useAuthDispatch();
    const token = useAuthState();
    const logOutHandle = ()=>{
            logout(dispatch);
            console.log("se deslogeó")
            //setLocation('/');
    }
    return (
        <>
            <Typography variant="h4">
                {console.log(token)}
                Adios
                <Button onClick={logOutHandle}>
                    Cerrar Sesión
                </Button>
            </Typography>
        </>
    )
}
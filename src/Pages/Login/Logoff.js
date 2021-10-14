import { Button, Divider, Typography } from '@mui/material';
import React from 'react';
import { useAuthDispatch,logout, useAuthState } from '../../context';



export function Logoff(props){
    
    const user = useAuthState();
    const dispatch = useAuthDispatch();
    const logOutHandle = ()=>{
            logout(dispatch);
            console.log("se deslogeó")
            //setLocation('/');
    }
    return (
        <>
            {console.log('estamos aqui')}
            <Typography variant="h4">
                Cerrar Sesión
                
            </Typography>
            {
                user.user.activo?
                <Typography variant="body1">
                Hasta pronto.
                </Typography>
                :
                <Typography variant="body1">
                Tu cuenta se encuentra actualmente inactiva.
                </Typography>
            }
            
            <Divider></Divider>
            <br/>
            {
                
            }
            <Button onClick={logOutHandle} variant="contained" color="secondary" align="center">
                    Cerrar Sesión
            </Button>
        </>
    )
}
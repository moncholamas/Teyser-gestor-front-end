import { Box, Divider, Grid, LinearProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuthState } from '../../context';

import {AsideEquipos} from './AsideEquipos';
import {MainEquipos} from './MainEquipos';

export function Equipos(){
    //define la forma del layout y los datos que carga mainEquipos
    //modos -> [new,edit,delete,view]
    const [modo,setModo] = useState('new');

    //es el id que genera la tabla para editar un equipo en particular
    const [idEquipoActualizar, setIdEquipoActualizar] = useState(undefined);

    //indica si cambió algo para pedir los datos de nuevo al back
    const [cambioEstado, setCambioEstado] = useState(0);

    //token de usuario 
    const tokenUser = useAuthState().token;

    const cambiarmodo = function(id,modo){
        //le paso al formulario el id del equipo a actualizar
        setIdEquipoActualizar(id);
        //activa el modo edicion (cambio de layout)
        setModo(modo);
    }


    useEffect(()=>{
        //trae el listado de los ultimos equipos
        
    },[cambioEstado]); // eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <>  
        <Box sx={{ width: '100%'}}>
                
        </Box>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Grid item>
                    <Typography variant="h3" sx={{display:'inline'}}>
                    Equipos
                    </Typography>
                </Grid>
                
            </Grid>
            
            <Divider />
            <br/>
            <Grid container  spacing={4}>
                <Grid item xs={12} md={4}>
                <Grid item alignSelf="center">
                </Grid>
                    <MainEquipos 
                        newmodo={modo} 
                        actualizarmodo={setModo} 
                        actual={idEquipoActualizar} 
                        cambio={setCambioEstado}
                        tokenUser={tokenUser}
                    />   
                </Grid>
                <Grid item xs={12} md={8}>
                    <AsideEquipos  
                        modo={modo}
                        cambiarModo={cambiarmodo}
                        tokenUser={tokenUser}
                    />
                </Grid>
            </Grid>
            
        </>
    )
}
import { Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuthState } from '../../context';

import {AsideEquipos} from './AsideEquipos';
import { traerOperadores } from './functions';
import {MainEquipos} from './MainEquipos';

export function Equipos(){
    //define la forma del layout y los datos que carga mainEquipos
    //modos -> new,edit,delete
    const [modo,setModo] = useState('new');

    //genera el listado de equipos actuales [deberia ser de Aside]
    const [equipos, setEquipos] = useState([]);

    //es el id que genera la tabla para editar un equipo en particular
    const [idEquipoActualizar, setIdEquipoActualizar] = useState(undefined);

    //indica si cambió algo para pedir los datos de nuevo al back
    const [cambioEstado, setCambioEstado] = useState(0);

    //token de usuario para las peticiones //deberian tenerlo solo los hijos
    const tokenUser = useAuthState().token;

    const cambiarmodo = function(id,modo){
        //activa el modo edicion (cambio de layout)
        setModo(modo);
        //le paso al formulario el id del equipo a actualizar
        setIdEquipoActualizar(id);
    }


    useEffect(()=>{
        //trae el listado de los ultimos equipos
        traerOperadores(tokenUser).then(res=>setEquipos(res)).catch(console.log("error"))
    },[cambioEstado]); // eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <>
            <Typography variant="h3">
                Equipos
            </Typography>
            <Divider />
            <br/>
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <MainEquipos newmodo={modo} actual={idEquipoActualizar} cambio={setCambioEstado}></MainEquipos>
                </Grid>
                <Grid item xs={8}>
                    <AsideEquipos listado={equipos} modo={cambiarmodo}></AsideEquipos>
                </Grid>
            </Grid>
            
        </>
    )
}
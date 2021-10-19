import { Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuthState } from '../../context';
import {ROOT_URL} from '../../context/actions';

import {AsideEquipos} from './AsideEquipos';
import {MainEquipos} from './MainEquipos';

export function Equipos(){
    //define la forma del layout y los datos que carga mainEquipos
    const [modoEdicion,setModoEdicion] = useState(undefined);

    //genera el listado de equipos actuales [deberia ser de Aside]
    const [equipos, setEquipos] = useState([]);

    //es el id que genera la tabla para editar un equipo en particular
    const [idEquipoActualizar, setIdEquipoActualizar] = useState(undefined);

    //indica si cambió algo para pedir los datos de nuevo al back
    const [cambioEstado, setCambioEstado] = useState(0);

    //token de usuario para las peticiones //deberian tenerlo solo los hijos
    const tokenUser = useAuthState().token;

    const activarEdicion = function(id){
        //activa el modo edicion (cambio de layout)
        setModoEdicion(true);

        //le paso al formulario el id del equipo a actualizar
        setIdEquipoActualizar(id);
    }

    

    

    
    useEffect(()=>{
        async function traerOperadores(){
            let res = await fetch(`${ROOT_URL}/equipos`,{
                headers: {
                    "Content-Type": "application/json",
                    "x-token": tokenUser
                  },
            });
            let data = await res.json();
            setEquipos(data.data);
            }
            traerOperadores();
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
                    <MainEquipos editable={modoEdicion} actual={idEquipoActualizar} cambio={setCambioEstado}></MainEquipos>
                </Grid>
                <Grid item xs={8}>
                    <AsideEquipos listado={equipos} editar={activarEdicion}></AsideEquipos>
                </Grid>
            </Grid>
            
        </>
    )
}
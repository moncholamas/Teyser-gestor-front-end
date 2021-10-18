import { Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuthState } from '../../context';
import {ROOT_URL} from '../../context/actions'

import {AsideEquipos} from './AsideEquipos';
import {MainEquipos} from './MainEquipos';

export function Equipos(){
    const [modoEdicion,setModoEdicion] = useState(false);
    const [equipos, setEquipos] = useState([]);
    const [cambioEstado, setCambioEstado] = useState(0);
    const tokenUser = useAuthState().token;

    const activarEdicion = function(){
        setModoEdicion(true);
    }

    const cargarNuevo = async function(equipo){
        
        try {
            const response = await fetch(`${ROOT_URL}/equipos/nuevo`,{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "x-token": tokenUser
                  },
                body: JSON.stringify(equipo)
            });
        //imprimir el equipo cargado en el front
        const data = await response.json();
        console.log(data);
        setCambioEstado(cambioEstado+1);
        } catch (error) {
            console.log(error)   
        }
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
                    <MainEquipos editable={modoEdicion} nuevo={cargarNuevo}></MainEquipos>
                </Grid>
                <Grid item xs={8}>
                    <AsideEquipos listado={equipos} editar={activarEdicion}></AsideEquipos>
                </Grid>
            </Grid>
            
        </>
    )
}
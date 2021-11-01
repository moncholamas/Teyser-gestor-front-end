import React, { useEffect, useState }  from 'react';
import { traerOperadores } from './functions';
import {TableAside} from './aside/table'
import { Filter } from './aside/filter';
import { Box, Divider, Paper } from '@mui/material';


export function AsideEquipos({cambiarModo,tokenUser,modo,setStatus,status}){  
    const [equipos, setEquipos] = useState([]);

    //vistas -> [main, search]
    const [vista, ] = useState('main')

    useEffect(() => {
        async function generarVista(){
            try {
                const resultado = await traerOperadores(tokenUser);
                setEquipos(resultado);
            } catch (error) {
                //manejar el error en la vista PENDIENTE
                setStatus({
                    date: Date.now(),
                    type: "error",
                    msg: "Error al traer los operadores, verificando su conexión..."
                });
                setEquipos([]);
            }
        }
        if(vista==='main'){
            generarVista();
        }
    }, [vista,status.type==='success'])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
        <Box 
            component={Paper}
            sx={{marginTop:{xs:0,md:-10},padding:{xs:0,md:2}}}
        >
            

            <Filter modo={cambiarModo}/>
            <Divider sx={{marginTop:2}}/>
            <TableAside 
                cambiarModo={cambiarModo}
                equipos={equipos}
                modo={modo}
            /> 
        </Box>
                      
        </>
    )
}
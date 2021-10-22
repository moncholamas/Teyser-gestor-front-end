import React, { useEffect, useState }  from 'react';
import { traerOperadores } from './functions';
import {TableAside} from './aside/table'
import { Filter } from './aside/filter';
import { Box, Divider, Paper } from '@mui/material';


export function AsideEquipos({cambiarModo,tokenUser,modo}){  
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
                setEquipos([]);
            }
        }
        if(vista==='main'){
            generarVista();
        }
    }, [vista])// eslint-disable-line react-hooks/exhaustive-deps

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
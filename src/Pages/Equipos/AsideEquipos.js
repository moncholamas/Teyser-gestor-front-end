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
        if(vista==='main'){
            traerOperadores(tokenUser).then(res=>setEquipos(res)).catch(console.log("error en algun lado"));
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
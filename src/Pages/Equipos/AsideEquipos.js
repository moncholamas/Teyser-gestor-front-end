import React, { useEffect, useState }  from 'react';
import { traerOperadores } from './functions';
import {TableAside} from './aside/table'
import { Filter } from './aside/filter';
import { Box, Divider, Paper } from '@mui/material';


export function AsideEquipos({modo,tokenUser}){  
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
            outlined
            sx={{marginTop:{xs:0,md:-10},padding:{xs:0,md:2}}}
        >
            <Filter modo={modo}/>
            <Divider sx={{marginTop:2}}/>
            <TableAside 
                modo={modo}
                equipos={equipos}
            /> 
        </Box>
                      
        </>
    )
}
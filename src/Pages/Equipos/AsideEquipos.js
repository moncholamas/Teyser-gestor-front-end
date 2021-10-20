import React, { useEffect, useState }  from 'react';
import { traerOperadores } from './functions';
import {TableAside} from './aside/table'


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
            <TableAside 
                modo={modo}
                equipos={equipos}
            />
        </>
    )
}
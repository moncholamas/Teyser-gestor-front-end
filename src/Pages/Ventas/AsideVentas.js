import {  Typography } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
import { useAuthState } from '../../context';


export function AsideVentas(){  
    const tokenUser = useAuthState().token;
    const [ventas,setventas] = useState([]);
    useEffect( ()=>{
        async function traerVentas(){
        let res = await fetch("http://localhost:3009/ventas",{
            headers: {
                "Content-Type": "application/json",
                "x-token": tokenUser
              },
        });
        let data = await res.json();
        setventas(data.data);
    }
    traerVentas();
    },[]); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <>
            <Typography variant="h5">
                Menu Ventas
                
                <br/>

                {ventas.map((venta)=>(
                    <Typography variant="body1" key={venta.id_venta}>
                        {venta.observacion} | {venta.total}
                    </Typography>
                ))
                }

            </Typography>
        </>
    )
}
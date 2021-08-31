import { Button, Typography } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
import { useAuthState } from '../../context';


export function AsideVentas(){  
    const token = useAuthState().token;
    const [ventas,setventas] = useState([]);
    useEffect( ()=>{
    async function traerVentas(){
        let res = await fetch("http://localhost:3009/ventas",{
            headers: {
                "Content-Type": "application/json",
                "x-token": token
              },
        });
        let data = await res.json();
        console.log(data.data)
        setventas(data.data);
    }
    traerVentas();
    },[]);
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
import {  ListItemIcon, ListItemText, MenuItem, MenuList, Typography } from '@material-ui/core';
import { ToggleOff, ToggleOn } from '@material-ui/icons';
import React, {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from '../../context';

export function AsideOperadores({statusMain}){ 
    const [operadores, setOperadores] = useState([]);
    const tokenUser = useAuthState().token;
    useEffect(()=>{
        
        async function traerOperadores(){
            let res = await fetch("http://localhost:3009/operador",{
                headers: {
                    "Content-Type": "application/json",
                    "x-token": tokenUser
                  },
            });

            let data = await res.json();
            
            setOperadores(data.data);
            }
            traerOperadores();
    },[statusMain]); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <>
            <Typography variant="body2" align="center" color="primary">
                Operadores actuales
                <br/>
            </Typography>
            <MenuList>
                {   
                    operadores? operadores.map((operador)=>(
                        <MenuItem 
                            component={Link} 
                            to={`/operadores/${operador.id_operador}`} 
                            key={operador.id_operador}
                        >
                        <ListItemIcon>
                            {
                                operador.activo? 
                                <ToggleOn/>
                                :
                                <ToggleOff/>
                            }
                            
                        </ListItemIcon>
                        <ListItemText>
                            {`${operador.nombre} ${operador.apellido}`}
                        </ListItemText>
                    </MenuItem>
                    ))
                    :null
                }
                
            </MenuList>
        </>
    )
}
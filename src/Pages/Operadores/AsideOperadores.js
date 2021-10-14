import {  ListItemIcon, ListItemText, makeStyles, MenuItem, MenuList } from '@mui/material';
import { ToggleOff, ToggleOn } from '@mui/icons-material';
import React, {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from '../../context';

export function AsideOperadores(props){ 
    const useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor: theme.palette.background.paper
        },
      }));

      const classes = useStyles();
      const [selectedIndex, setSelectedIndex] = React.useState(null);
    
    
      const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
      };
      
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
    },[]); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <>
            
            <MenuList className={classes.root}>
                {   
                    operadores? operadores.map((operador,index)=>(
                        <MenuItem 
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
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
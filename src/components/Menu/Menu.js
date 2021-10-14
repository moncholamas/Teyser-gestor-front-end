import React from 'react';
import { List,  ListItem,  ListItemIcon,  ListItemText } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import { useAuthState } from '../../context';
import { isExpired , decodeToken } from 'react-jwt'
import enlaces from '../../config/links'


export function Menu(){
    const userToken = useAuthState().token;
    const expired = isExpired(userToken);
    const user = decodeToken(userToken);



    const [selectedIndex, setSelectedIndex] = React.useState(null);
    
    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
      };

    //filtro un menu segun 
                    //// offline, operario o admin

    const menuParcial = enlaces.filter(enlace=>(
        expired?(enlace.logoff)
        :
        (
            user.rol==='admin'? (enlace.menuAdmin)
            :(
                enlace.menuOperario 
            )
        )
    ));

    return (
            <List > 
                {
                    menuParcial.map((enlace, index)=> (
                        <ListItem 
                            button
                            component={RouterLink} 
                            to={enlace.link} 
                            key={enlace.link}
                            onClick={(event) => handleMenuItemClick(event, index)}
                            selected={index === selectedIndex}
                        >
                                    <ListItemIcon>
                                        < enlace.icon />
                                    </ListItemIcon>
                                    <ListItemText primary={enlace.nombre} /> 
                        </ListItem>
                    ))
                }
            </List>          
        )};
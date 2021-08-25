import React from 'react';
import {  ListItemIcon, ListItemText, MenuItem } from '@material-ui/core'
import { Battery80,  Print } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import TimelineIcon from '@material-ui/icons/Timeline';
import PeopleIcon from '@material-ui/icons/People';

export function MenuAdmin(){


    return (
        <>
                <MenuItem component={Link} to={'/login'}>
                    <ListItemIcon>
                        <Print/>
                    </ListItemIcon>
                    <ListItemText>
                        Productos
                    </ListItemText>
                </MenuItem>
                <MenuItem component={Link} to={'/contacto'}>
                    <ListItemIcon>
                        <Battery80/>
                    </ListItemIcon>
                    <ListItemText>
                        Insumos
                    </ListItemText>
                </MenuItem>
                <MenuItem component={Link} to={'/acerca'}>
                    <ListItemIcon>
                        <PeopleIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Clientes
                    </ListItemText>
                </MenuItem>
                <MenuItem component={Link} to={'/ventas'}>
                    <ListItemIcon>
                        <TimelineIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Estadisticas
                    </ListItemText>
                </MenuItem>
                
     </>
)};
import React from 'react';
import {  ListItemIcon, ListItemText, MenuItem } from '@material-ui/core'
import {  AssignmentTurnedIn, Battery80,  Dvr,  Print, ViewQuilt } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import TimelineIcon from '@material-ui/icons/Timeline';
import PeopleIcon from '@material-ui/icons/People';

export function MenuAdmin(){


    return (
        <>
                <MenuItem component={Link} to={'/pagos'}>
                    <ListItemIcon>
                        <AssignmentTurnedIn/>
                    </ListItemIcon>
                    <ListItemText>
                        Pagos
                    </ListItemText>
                </MenuItem>
                <MenuItem component={Link} to={'/productos'}>
                    <ListItemIcon>
                        <Print/>
                    </ListItemIcon>
                    <ListItemText>
                        Productos
                    </ListItemText>
                </MenuItem>
                <MenuItem component={Link} to={'/insumos'}>
                    <ListItemIcon>
                        <Battery80/>
                    </ListItemIcon>
                    <ListItemText>
                        Insumos
                    </ListItemText>
                </MenuItem>
                <MenuItem component={Link} to={'/equipos'}>
                    <ListItemIcon>
                        <Dvr/>
                    </ListItemIcon>
                    <ListItemText>
                        Equipos
                    </ListItemText>
                </MenuItem>
                <MenuItem component={Link} to={'/operadores'}>
                    <ListItemIcon>
                        <PeopleIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Operadores
                    </ListItemText>
                </MenuItem>
                <MenuItem component={Link} to={'/stock'}>
                    <ListItemIcon>
                        <ViewQuilt/>
                    </ListItemIcon>
                    <ListItemText>
                        Stock
                    </ListItemText>
                </MenuItem>
                <MenuItem component={Link} to={'/estadisticas'}>
                    <ListItemIcon>
                        <TimelineIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Estadisticas
                    </ListItemText>
                </MenuItem>
                
     </>
)};
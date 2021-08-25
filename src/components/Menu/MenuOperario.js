import React from 'react';
import { Divider, ListItemIcon, ListItemText, MenuItem } from '@material-ui/core'
import { Announcement, ShoppingCart } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { MenuAdmin } from './MenuAdmin';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

export function MenuOperario(){

    return (
        <>
                <Divider></Divider>
                <MenuItem component={Link} to={'/login'}>
                    <ListItemIcon>
                        <ShoppingCart/>
                    </ListItemIcon>
                    <ListItemText>
                        Ventas
                    </ListItemText>
                </MenuItem>
                <MenuItem component={Link} to={'/contacto'}>
                    <ListItemIcon>
                        <Announcement/>
                    </ListItemIcon>
                    <ListItemText>
                        Novedades
                    </ListItemText>
                </MenuItem>

                <MenuAdmin/>
                
                <MenuItem component={Link} to={'/ventas'}>
                    <ListItemIcon>
                        <AccountBoxIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Mi Cuenta
                    </ListItemText>
                </MenuItem>

                
     </>
)};
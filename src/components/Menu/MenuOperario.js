import React from 'react';
import { Divider, ListItemIcon, ListItemText, MenuItem } from '@material-ui/core'
import { Announcement, ShoppingCart } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { MenuAdmin } from './MenuAdmin';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useAuthState } from '../../context';


export function MenuOperario(){
    const userActual = useAuthState().user;

    return (
        <>
                <Divider></Divider>
                <MenuItem component={Link} to={'/ventas'}>
                    <ListItemIcon>
                        <ShoppingCart/>
                    </ListItemIcon>
                    <ListItemText>
                        Ventas
                    </ListItemText>
                </MenuItem>
                <MenuItem component={Link} to={'/novedades'}>
                    <ListItemIcon>
                        <Announcement/>
                    </ListItemIcon>
                    <ListItemText>
                        Novedades
                    </ListItemText>
                </MenuItem>

                {
                    userActual.rol==="admin"?
                    <MenuAdmin/>
                    :
                    null
                }
                
                
                <MenuItem component={Link} to={'/micuenta'}>
                    <ListItemIcon>
                        <AccountBoxIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Mi Cuenta
                    </ListItemText>
                </MenuItem>

                
     </>
)};
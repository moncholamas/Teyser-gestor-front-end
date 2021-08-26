import React from 'react';
import {Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Typography } from '@material-ui/core'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ForumIcon from '@material-ui/icons/Forum';
import { LiveHelp } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { useAuthState } from '../../context';
import { MenuOperario } from './MenuOperario';

export function Menu(){
    const userDetails = useAuthState();

    return (
        <>
            <MenuList >
                <Link to="/">
                    <Typography 
                        variant="h5" 
                        color="primary" 
                        align="center"
                    >
                        Teyser Gestor
                    </Typography>
                </Link>
                <br/>
                 {/* Si esta logeado puede ver el menu de operario */}
                 {
                     userDetails.token? <MenuOperario/> : null
                 }
                
                <Divider></Divider>
                <MenuItem component={Link} to={'/login'} >
                    <ListItemIcon>
                        <PowerSettingsNewIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Ingresar
                    </ListItemText>
                </MenuItem>
                <MenuItem component={Link} to={'/contacto'}>
                    <ListItemIcon>
                        <ForumIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Contacto
                    </ListItemText>
                </MenuItem>
                <MenuItem component={Link} to={'/acerca'}>
                    <ListItemIcon>
                        <LiveHelp/>
                    </ListItemIcon>
                    <ListItemText>
                        Acerca de 
                    </ListItemText>
                </MenuItem>

                
                
                <Divider></Divider>
                <Typography variant="body1">
                    {userDetails.msg}
                </Typography>
            </MenuList>          
     </>
        )};
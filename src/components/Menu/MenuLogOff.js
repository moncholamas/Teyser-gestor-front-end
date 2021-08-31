import React from 'react';
import { ListItemIcon, ListItemText, MenuItem,  } from '@material-ui/core'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ForumIcon from '@material-ui/icons/Forum';
import { LiveHelp } from '@material-ui/icons';
import {Link} from 'react-router-dom';


export function MenuLogOff({token}){
    return (
        token?
        <>
            <MenuItem component={Link} to={'/logoff'} >
                    <ListItemIcon>
                        <PowerSettingsNewIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        Salir
                    </ListItemText>
                </MenuItem>
        </>
        :
        <>
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
     </>
)};






                
                
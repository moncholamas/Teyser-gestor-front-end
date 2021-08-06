import React from 'react';
import {Box, Button, Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from '@material-ui/core'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ForumIcon from '@material-ui/icons/Forum';
import { LiveHelp } from '@material-ui/icons';
import {Link} from 'wouter';

export function Menu(){
    return (
        <MenuList >
            <Divider></Divider>
            <Link href="/">
            <MenuItem>
                <ListItemIcon>
                    <PowerSettingsNewIcon/>
                </ListItemIcon>
                <ListItemText>
                    Ingresar
                </ListItemText>
            </MenuItem>
            </Link>
            <Link href="/contacto">
            <MenuItem >
                <ListItemIcon>
                    <ForumIcon/>
                </ListItemIcon>
                <ListItemText>
                    Contacto
                </ListItemText>
            </MenuItem>
            </Link>
            <Link href="/acerca">
            <MenuItem>
                <ListItemIcon>
                    <LiveHelp/>
                </ListItemIcon>
                <ListItemText>
                    Acerca de 
                </ListItemText>
            </MenuItem>
            </Link>
            <Divider></Divider>
             
        </MenuList>
        )};
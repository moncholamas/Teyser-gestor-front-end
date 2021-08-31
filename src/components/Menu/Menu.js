import React from 'react';
import {Divider,  MenuList, Typography } from '@material-ui/core'
import {Link} from 'react-router-dom';
import { useAuthState } from '../../context';
import { MenuOperario } from './MenuOperario';
import { MenuLogOff } from './MenuLogOff';

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
                
                <MenuLogOff token={userDetails.token}/>
                
                <Divider></Divider>
                <Typography variant="body1">
                    {userDetails.msg}
                </Typography>
            </MenuList>          
     </>
        )};
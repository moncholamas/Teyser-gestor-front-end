import React from 'react';
import {Divider,  MenuList, Typography } from '@material-ui/core'
import {Link} from 'react-router-dom';
import { useAuthState } from '../../context';
import { isExpired } from 'react-jwt'
import { MenuOperario } from './MenuOperario';
import { MenuLogOff } from './MenuLogOff';

export function Menu(){
    const userToken = useAuthState().token;
    const expired = isExpired(userToken);
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
                     !expired? <MenuOperario/> : null
                 }
                <Divider></Divider>
                
                <MenuLogOff token={userToken}/>
                
                <Divider></Divider>
                <Typography variant="body1">
                    
                </Typography>
            </MenuList>          
     </>
        )};
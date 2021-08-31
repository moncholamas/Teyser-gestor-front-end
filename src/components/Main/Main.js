import React from 'react';
import { Grid } from '@material-ui/core';
import routes from '../../config/routes'
import AppRoutes from '../AppRoutes';
import { AsideMain } from '../Aside';
import {  useAuthState } from '../../context';
import {isExpired} from 'react-jwt'

export function Main (){
    //llamar un componente distinto segun la ruta
    const userToken = useAuthState().token;
    const expired = isExpired(userToken);
    return (
        <Grid container spacing={2}>
                <Grid item xs={expired?12:8} >
                    
                    {
                        routes.map(route =>  (<AppRoutes
                                
                                key={route.path}
                                path={route.path}
                                component={route.component}
                                isPrivate={route.isPrivate}
                                allowsInactive={route.allowsInactive}
                                isExpired={expired}
                        />)
                        )
                    }
                    
                </Grid>
                {   
                    /* si tiene no posee token no muestra el submenu */
                    expired?
                    null:
                    (<Grid item xs={4}>
                        <Grid >
                            <AsideMain/>
                        </Grid>
                    </Grid>)
                } 
        </Grid>
    );
}
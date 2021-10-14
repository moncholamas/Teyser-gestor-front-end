import React from 'react';
import { Grid } from '@mui/material';
import routes from '../../config/routes'
import AppRoutes from '../AppRoutes';
import {  useAuthState } from '../../context';
import {isExpired} from 'react-jwt'


export function Main (){
    //llamar un componente distinto según la ruta
    const user = useAuthState();
    const expired = isExpired(user.token);
    const activo = (user === null? false: true);
    return (
        <Grid container>
                <Grid item xs={12} >
                    
                    {
                        routes.map(route =>  (<AppRoutes       
                                key={route.path}
                                path={route.path}
                                component={route.component}
                                isPrivate={route.isPrivate}
                                isActive={route.path==='/logoff'? true: activo}
                                isExpired={expired}

                        />)
                        )
                    }
                    </Grid>
            </Grid>
    );
}
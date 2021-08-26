import React from 'react';
import { Box, Grid } from '@material-ui/core';
import routes from '../../config/routes'
import AppRoutes from '../AppRoutes';
import { Aside } from '../Aside';
import { useAuthState } from '../../context';
import {useJwt} from 'react-jwt'

export function Main (){
    //llamar un componente distinto segun la ruta
    const token = useAuthState();
    const {decodedToken,isExpired} = useJwt(token);
    console.log(`esto expiró? ${isExpired}`);
    return (
            <Box
            sx={{
                padding: 20,
                paddingX: 5,   
                minHeight: 450
            }}
            component={Grid}
            container
            >
                <Grid item xs={()=>isExpired?12:6} >
                    
                    {
                        routes.map(route =>  (<AppRoutes
                                
                                key={route.path}
                                path={route.path}
                                component={route.component}
                                isPrivate={route.isPrivate}
                                allowsInactive={route.allowsInactive}
                        />)
                        )
                    }
                    
                </Grid>
                {   
                
                    /* si tiene no posee token no muestra el submenu */
                    ()=>!isExpired?
                    null:
                    (<Grid item xs={3}>
                        <Grid >
                            <Aside />
                        </Grid>
                    </Grid>)
                } 
            </Box>

    );
}
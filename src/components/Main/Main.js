import React from 'react';
import { Box, Grid } from '@material-ui/core';
import routes from '../../config/routes'
import AppRoutes from '../AppRoutes';


export function Main (){
    //llamar un componente distinto segun la ruta
    return (
            <Box
            sx={{
                padding: 20,
                paddingX: 5,   
                minHeight: 450
            }}
            >
                <Grid container height={450}>
                    
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
            </Box>

    );
}
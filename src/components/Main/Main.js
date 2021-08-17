import React from 'react';
import { Box, Grid } from '@material-ui/core';
import routes from '../../config/routes'
import AppRoutes from '../AppRoutes';
import {Switch} from 'wouter';

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
                <Switch>
                {
                    routes.map(route =>  (<AppRoutes
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            isPrivate={route.isPrivate}
                            allowsInactive={route.allowsInactive}
                            link={route.link}
                        />)
                    )
                }
                </Switch>
             </Grid>
        </Box>
    );
}
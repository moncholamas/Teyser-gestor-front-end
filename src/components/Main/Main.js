import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import routes from '../../config/routes'
import AppRoutes from '../AppRoutes';
import {  useAuthState } from '../../context';
import {isExpired} from 'react-jwt'
import { makeStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root:{
        margin:0,
        padding:20, 
        color: blue,
        minHeight:490
    }
});

export function Main (){
    //llamar un componente distinto según la ruta
    const user = useAuthState();
    const expired = isExpired(user.token);
    const classes = useStyles();

    return (
        <Grid container>
                <Grid item xs={12} >

                    <Paper variant="outlined" square className={classes.root}>
                    
                    {
                        routes.map(route =>  (<AppRoutes
                                
                                key={route.path}
                                path={route.path}
                                component={route.component}
                                isPrivate={route.isPrivate}
                                isActive={route.path==='/logoff'? true: user.user.activo}
                                isExpired={expired}

                        />)
                        )
                    }
                    </Paper>
                    </Grid>
            </Grid>
    );
}
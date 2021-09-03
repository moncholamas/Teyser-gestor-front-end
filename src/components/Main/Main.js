import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import routes from '../../config/routes'
import AppRoutes from '../AppRoutes';
import { AsideMain } from '../Aside';
import {  useAuthState } from '../../context';
import {isExpired} from 'react-jwt'
import { makeStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root:{
        padding:30,
        marginTop:0,
        color: blue,
        minHeight:490
    }
});

export function Main (){
    //llamar un componente distinto segun la ruta
    const userToken = useAuthState().token;
    const expired = isExpired(userToken);
    const classes = useStyles();
    return (
        <Grid container>
                <Grid item xs={expired?12:8} >

                    <Paper variant="outlined" className={classes.root}>

                    
                    {
                        routes.map(route =>  (<AppRoutes
                                
                                key={route.path}
                                path={route.path}
                                component={route.component}
                                isPrivate={route.isPrivate}
                                isExpired={expired}
                        />)
                        )
                    }
                    </Paper>
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
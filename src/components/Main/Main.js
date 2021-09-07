import React, { useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
import routes from '../../config/routes'
import AppRoutes from '../AppRoutes';
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
    //llamar un componente distinto según la ruta
    const user = useAuthState();
    const expired = isExpired(user.token);
    const classes = useStyles();

    //StateMain es un objeto para compartir el stado de las operaciones entre main y aside
    const [statusMain, setStatusMain] = useState({msj:'hola'});
    const changeStatusMain= (newStatus) => {
        setStatusMain(newStatus);
    };
    return (
        <Grid container>
                <Grid item xs={12} >

                    <Paper variant="outlined" className={classes.root}>
                    
                    {
                        routes.map(route =>  (<AppRoutes
                                
                                key={route.path}
                                path={route.path}
                                component={route.component}
                                isPrivate={route.isPrivate}
                                isActive={route.path==='/logoff'? true: user.user.activo}
                                isExpired={expired}
                                status = {statusMain}
                                changeStatus = {changeStatusMain}
                        />)
                        )
                    }
                    </Paper>
                    </Grid>
            </Grid>
    );
}
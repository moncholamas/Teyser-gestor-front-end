import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Route } from 'react-router';
import { AsideOperadores } from './AsideOperadores';
import { Operador } from './Operador';


export function Operadores(props){
    return (
        <>  
            
            <Grid container spacing={1}>
                <Grid item xs={9}>
                    <Route path="/operadores/:id">
                        <Operador {...props}/>
                    </Route>
                    <Route exact path="/operadores">
                        <Typography variant="h2">
                                Bienvenidos a Operadores
                        </Typography>
                    </Route>
                    
                </Grid>
                <Grid item xs={3}>
                    <Paper variant="outlined" square>
                        <AsideOperadores {...props}>
                        </AsideOperadores>
                    </Paper>
                </Grid>
            </Grid> 
        </>
    )
}
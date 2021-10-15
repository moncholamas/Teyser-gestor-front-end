import React from 'react';
import {Box, Divider, Grid,Typography} from '@mui/material';

export function Footer(){
    return (
        <>
        <Box component="footer" sx={{
            height: 50,
            bgcolor: 'primary'
        }}>
             <Divider />
            <Grid container>
                <Grid item xs={6}>
                    <Typography variant="body1" color="textPrimary" align="center" >Mas info pie de pagina</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Box color="text.primary" clone>
                        <Typography variant="body2" color="textPrimary" align="center" >Teyser - Gestor | 2021</Typography>
                    </Box>
                </Grid>
                
            </Grid>
        </Box>
        </>
    );
}
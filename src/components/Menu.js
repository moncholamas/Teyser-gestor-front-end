import React from 'react';
import {Box, Button, Divider } from '@material-ui/core'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ForumIcon from '@material-ui/icons/Forum';
import { LiveHelp } from '@material-ui/icons';
import {Link} from 'wouter';

export function Menu(){
    return (
        <Box >
            <Divider></Divider>
                    <Button 
                        fullWidth
                        startIcon={<PowerSettingsNewIcon/>}
                        
                        color="primary"
                    >
                        <Link href="/">
                            Home
                        </Link>
                    </Button >
                    <Button 
                        fullWidth
                        startIcon={<PowerSettingsNewIcon/>}
                        
                        color="primary"
                    >
                        
                        <Link href="/clientes">
                            Clientes
                        </Link>
                    </Button >
                    

            <Divider></Divider>
                    <Button 
                        fullWidth
                        startIcon={<PowerSettingsNewIcon/>}
                        
                        color="primary"
                    >
                        
                        Ingresar
                    </Button >
                    <Button 
                        fullWidth
                        startIcon={<ForumIcon/>}
                        color="primary"
                    >
                        
                        Contacto
                    </Button>
                    <Button
                        fullWidth
                        startIcon={<LiveHelp/>}
                        color="primary"
                    >
                        
                        Acerca de
                    </Button>
            <Divider></Divider>  
        </Box>
        )};
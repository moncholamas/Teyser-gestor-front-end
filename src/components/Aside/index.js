import React from 'react';
import { MenuList, Typography } from '@material-ui/core'

import {Link} from 'react-router-dom';


export function Aside(){
    

    return (
        <>
            <MenuList >
                <Link to="/">
                    <Typography 
                        variant="h2" 
                        color="primary" 
                        align="center"
                    >
                        Teyser Gestor
                        soy un aside
                    </Typography>
                </Link>
            </MenuList>          
     </>
)};
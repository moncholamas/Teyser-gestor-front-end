import React from 'react';
import { MenuList } from '@material-ui/core'
import { AsideVentas } from '../../Pages/Ventas/AsideVentas'
import { Route } from 'react-router-dom';


export function AsideMain(){
    

    return (
        <>
            <MenuList >
                <Route path="/ventas">
                    <AsideVentas></AsideVentas>
                </Route>
            </MenuList>          
     </>
)};
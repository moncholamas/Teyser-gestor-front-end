import React from 'react';
import routes from '../../config/routes';
import {Redirect, Route} from 'react-router-dom';
import { useAuthState } from '../../context';

export function AsideMain(){
    const userActual = useAuthState().user;

    return (
        <>
                {
                    userActual.rol==="admin"?
                    routes.map((route)=>(
                        <Route
                            key={route.path}
                            path={route.path}
                            component={route.aside}
                        />
                    ))
                    :<Redirect to="/ventas" />
                }
                
     </>
)};
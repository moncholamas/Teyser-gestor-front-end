import React from 'react';
import routes from '../../config/routes';
import {Route} from 'react-router-dom';

export function AsideMain(){
    

    return (
        <>
                {
                    routes.map((route)=>(
                        <Route
                            key={route.path}
                            path={route.path}
                            component={route.aside}
                        />
                    ))
                }
                
     </>
)};
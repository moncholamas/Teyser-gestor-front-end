import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const AppRoutes = ({component:Component,path,isPrivate,isExpired, isActive,...rest})=>{
    const pathExact= path==='/'?true:false;
    return( <Route
                exact={pathExact}
                path={path}
                render={ props => (isPrivate && isExpired) ? 
                    (<Redirect to={{pathname: '/login'}} />) 
                    : 
                    (
                        isPrivate && !isActive?
                        <Redirect to={{pathname: '/logoff'} } />
                        :
                        <Component {...props} {...rest} /> 
                    )}
                {...rest}
            />
    )
}

export default AppRoutes;
import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import { useJwt } from 'react-jwt'

import {useAuthState} from '../../context';

const AppRoutes = ({component:Component,path,isPrivate,...rest})=>{
    const userDetails = useAuthState();
    console.log(isPrivate);
    const {decodedToken,isExpired} = useJwt(userDetails.token)
    console.log(isExpired);
    console.log(decodedToken);
    return( <Route
                exact
                path={path}
                render={ props => (isPrivate && isExpired) ? (<Redirect to={{pathname:"/login"}} />) : ( <Component {...props} />)}
                {...rest}
            />
    )
}

export default AppRoutes;
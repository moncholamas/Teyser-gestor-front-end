import React from 'react';
import {Redirect, Route} from 'wouter';

import {useAuthState} from '../../context';

const AppRoutes = ({Component,path,isPrivate,...rest})=>{
    // const userDetails = useAuthState;
    return( <Route
                path={path}
                render={ props => isPrivate ? (<Redirect to="/" />) : ( <Component {...props} />)}
                {...rest}
            />
    )
}

export default AppRoutes;
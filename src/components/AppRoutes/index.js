import React from 'react';
import {Redirect, Route} from 'react-router-dom';

import {useAuthState} from '../../context';

const AppRoutes = ({component:Component,path,isPrivate,...rest})=>{
    const userDetails = useAuthState();
    const isExact = ()=> path === '/'?true:false;
    console.log(isPrivate);
    console.log(!Boolean(userDetails.token));
    return( <Route
                exact={isExact}
                path={path}
                render={ props => (isPrivate && !Boolean(userDetails.token)) ? (<Redirect to={{pathname:"/login"}} />) : ( <Component {...props} />)}
                {...rest}
            />
    )
}

export default AppRoutes;
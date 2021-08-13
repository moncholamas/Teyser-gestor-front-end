import React from 'react';
import { AuthReducer, initialState } from './reducer';

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

export function useAuthState(){
    const context = React.useContext(AuthStateContext);
    if(context===undefined){
        throw new Error("Error al acceder al estado, verifique estar dentro del Provider");
    }
    return context;
}

export function useAuthDispatch(){
    const context = React.useContext(AuthDispatchContext);
    if(context===undefined){
        throw new Error("Error al acceder al dispatch, verifique estar dentro del Provider");
    }
    return context;
}


export function AuthProvider({children}){
    const [user, dispatch] = React.useReducer(AuthReducer,initialState);
    return (
        <AuthStateContext.Provider value={user}>
                <AuthDispatchContext.Provider value={dispatch}>
                    {children}
                </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>

    );
}
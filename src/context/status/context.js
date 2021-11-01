import React, { useReducer } from 'react';
import {StatusReducer,initialState} from './reducer'

const StatusStateContext = React.createContext();
const StatusDispatchContext = React.createContext();

//hooks
export const useStatusState = () =>{
    const context = React.useContext(StatusStateContext);
    if(context===undefined){
        throw new Error('no puede usar el status fuera de su provider');
    }
    return context;
}

export const useStatusDispatch = () =>{
    const context = React.useContext(StatusDispatchContext);
    if(context===undefined){
        throw new Error('no puede usar el dispatch del estatus fuera de su provider');
    }
    return context;
}

export function StatusProvider({children}){
    const [status, dispatch] = useReducer(StatusReducer, initialState);
    return (
        <StatusStateContext.Provider value={status}>
                <StatusDispatchContext.Provider value={dispatch}>
                    {children}
                </StatusDispatchContext.Provider>
        </StatusStateContext.Provider>
    )
    
}
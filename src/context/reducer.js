//import React from 'react';


let token = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).auth_token
    : "";

export const initialState = {
    token: "" || token,
    loading: false,
    errorMsg: null
}

export const AuthReducer = (initialState,action)=>{
    switch(action.type){
        case "REQUEST_LOGIN":
            return {
                ...initialState,
                loading: true
            };
        case "LOGIN_SUCCESS":
            return {
                ...initialState,
                token: action.payload.data,
                loading: false
            };
        case "LOGOUT":
            return {
                ...initialState,
                token: ""
            }
        case "LOGIN_ERROR":
            return {
                ...initialState,
                loading: false,
                errorMsg: action.error
            };
        default:
            throw new Error(`Action not found ${action.type}`);
        }
}
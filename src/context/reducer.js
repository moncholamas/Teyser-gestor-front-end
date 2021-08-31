//import React from 'react';
let user = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).user
    : null;

let token = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).data
    : null;

export const initialState = {
    token: null || token,
    user: {} || user,
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
                user:action.payload.user,
                loading: false
            };
        case "LOGOUT":
            return {
                ...initialState,
                token: null,
                user: {}
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
import React from 'react';

let user = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).user
    : "";

let token = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).auth_token
    : "";

export const initialState = {
    userDetails: "" || user,
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
                user: action.payload.user,
                token: action.payload.token,
                loading: false
            };
        case "LOGOUT":
            return {
                ...initialState,
                user: "",
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
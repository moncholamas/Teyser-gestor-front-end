import {decodeToken} from 'react-jwt'
const ROOT_URL = "http://localhost:3003"

export async function loginUser(dispatch, loginPayload){
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginPayload)
    }
    try {
        dispatch({type:'REQUEST_LOGIN'});
        let response = await fetch(`${ROOT_URL}/ingresar`,requestOptions)
        let data = await response.json();
        const tokenResponse = data.data;
        if(tokenResponse){
            //data {msg / data(token)}
            const tokenDecoded = decodeToken(tokenResponse);
            let payload = {
                //token
                data: tokenResponse,
                //datos del usuario
                user: tokenDecoded
            }
            dispatch({type: 'LOGIN_SUCCESS', payload});
            //desarmar el json con jwt y guardar los datos del usuario
            localStorage.setItem('currentUser',JSON.stringify(payload));
            return data;
        }

        dispatch({type:'LOGIN_ERROR',error:data.errors[0]});
        return;

    } catch (error) {
        dispatch({type:'LOGIN_ERROR',error:error})
    }
}

export async function logout(dispatch) {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
  }

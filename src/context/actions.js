const ROOT_URL = "http://localhost:3009/ingresar"

export async function loginUser(dispatch, loginPayload){
    const requestOptions = {
        method: 'POST',
        headres: {'Content-Type': 'aplication/json'},
        body: JSON.stringify(loginPayload)
    }
    try {
        dispatch({type:'REQUEST_LOGIN'});
        let response = await fetch(`${ROOT_URL}/ingresar`,requestOptions)
        let data = await response.json();
        
        if(data.user){
            dispatch({type: 'LOGIN_SUCCESS', payload: data});
            localStorage.setItem('currentUser',JSON.stringify(data));
            return data
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
    localStorage.removeItem('token');
  }

const ROOT_URL = "http://localhost:3009"

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

        if(data.data){
            dispatch({type: 'LOGIN_SUCCESS', payload: data});
            //desarmar el json con jwt y guardar los datos del usuario
            localStorage.setItem('currentUser',JSON.stringify(data));
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
    localStorage.removeItem('token');
  }

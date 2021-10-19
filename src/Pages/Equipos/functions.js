import {ROOT_URL} from '../../context/actions';

//envia los datos del nuevo equipo al Back
export const nuevo = async function(equipo, tokenUser){
        
    try {
        const response = await fetch(`${ROOT_URL}/equipos/nuevo`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "x-token": tokenUser
              },
            body: JSON.stringify(equipo)
        });
    //imprimir el equipo cargado en el front
    const data = await response.json();
    return data;

    } catch (error) {
        console.log(error);
        return -1;
    }
}

export const eliminar = async function(id, tokenUser){
        
    try {
        const response = await fetch(`${ROOT_URL}/equipos/eliminar/${id}`,{
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "x-token": tokenUser
              }
        });
    //imprimir el equipo cargado en el front
    const data = await response.json();
    return data;
    } catch (error) {
        console.log(error);
        return -1;
    }
}


export async function editar(equipo,tokenUser,actual){
    try {
        const response = await fetch(`${ROOT_URL}/equipos/actualizar/${actual}`,{
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "x-token": tokenUser
              },
            body: JSON.stringify(equipo)
        });
    //imprimir el equipo cargado en el front
    const data = await response.json();
    return data
    } catch (error) {
        console.log(error);
        return -1;
    }
}


export async function traerOperadores(tokenUser){
    try {
        let res = await fetch(`${ROOT_URL}/equipos`,{
            headers: {
                "Content-Type": "application/json",
                "x-token": tokenUser
              },
        });
        let data = await res.json();
        console.log(data.data)
        return data.data;
    } catch (error) {
        return null;
    }
}
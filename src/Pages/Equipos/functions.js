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
        throw new Error('error al acceder al API para ingresar nuevo item');
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
        throw new Error('error al acceder al API para borrar un item');
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
    console.log(data)
    return data
    } catch (error) {
        throw new Error('error al acceder al API para actualizar un item');
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
        return data.data;
    } catch (error) {
        throw new Error('Error al conectar con API');
    }
}


    

export function cargarDatosActuales(data){
    const {nombre_fantasia,nombre_tecnico,estado,categoria,createdAt,updatedAt} = data.data;
    return({
        equipo:{
            nombre_fantasia:nombre_fantasia||'',
            nombre_tecnico:nombre_tecnico||'',
            estado:estado||'',
            categoria:categoria||''
        },
        otrosDatos:{
            createdAt,
            updatedAt
        }
    });
}

export const traerDatosActuales = async function(tokenUser,actual){
    try {
        const response = await fetch(`${ROOT_URL}/equipos/${actual}`,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "x-token": tokenUser
            }
        });
    //guardar los datos en el equipo actual para pasarlo a Main
    const data = await response.json();
    return data;
    } catch (error) {
        throw new Error("error al acceder a los datos del equipo")  
    }
}



export function limpiarDatosActuales(){
    return {
        nombre_tecnico: "",
        nombre_fantasia: "",
        estado: "operativo",
        categoria: "impresora"
    };
}
import {  Button, Checkbox, Divider, FormControlLabel, FormGroup, Typography } from '@material-ui/core';
import React, {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import { useAuthState } from '../../context';

export function Operador(){
    const [operador, setOperador] = useState({});
    const tokenUser = useAuthState().token;
    const idOperador = useParams().id;
    const [state,setState]=useState({
        checkedA: false,
        checkedB: false
      });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const userActualizado = {
            activo: false,
        }
        if(state.checkedA){ userActualizado.activo = !operador.activo; }
        
        const response = await fetch(`http://localhost:3009/operador/actualizar/${idOperador}`,{
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "x-token": tokenUser
                  },
                body: JSON.stringify(userActualizado)
        });
        const data = await response.json();
        console.log(data)
    }

    useEffect(()=>{
        async function traerOperador(){
            const response = await fetch(`http://localhost:3009/operador/${idOperador}`,{
                headers: {
                    "Content-Type": "application/json",
                    "x-token": tokenUser
                  },
            });
            const data = await response.json();
            setOperador(data.data);
        }
        setState({
            checkedA: false,
            checkedB: false
        })
        traerOperador();
    },[idOperador]); // eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <>
            <Typography variant="h4" >
                Operador: {operador.nombre} {operador.apellido}
            </Typography>
            <Divider />
            <Typography variant="body1" >
                Correo: {operador.correo} 
            </Typography>
            <Typography variant="body1" >
                Rol: {operador.tipo_operador} 
            </Typography>
            <Typography variant="body1" >
                Estado: {operador.activo?'activo':'inactivo'} 
            </Typography>
            <Typography variant="body1" >
                Ingresó al sistema: {operador.createdAt} 
            </Typography>
            <Typography variant="body1" >
                Última modificación: {operador.createdAt} 
            </Typography>
            <Divider />
            <br/>

            <Typography variant="h5" >
                Opciones
            </Typography>
            <form onSubmit={handleSubmit}>
            <FormGroup row >
                <FormControlLabel
                    control={
                    <Checkbox 
                        checked={state.checkedA} 
                        onChange={handleChange} 
                        name="checkedA" 
                        color="primary"
                    />
                    }
                    label= {operador.activo?'Desactivar Cuenta': 'Activar Cuenta'}
                />
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label= {operador.tipo_operador==='operario'?'Convertir en Administrador': 'Convertir en Operario'} 

                />
                <br/>
                <Button variant="contained" color="primary" type="submit"> Actualizar </Button>
                </FormGroup>
            </form>
            

           
            
            <br/>
            <br/>
            <Typography variant="h6" >
                Eliminar de forma permanente
            </Typography>
            <Typography variant="body2" >
                Esta es una operación irreversible, debe ingresar su contraseña para confirmar el comando.
            </Typography>
            <Button variant="contained" color="secondary"> Eliminar Cuenta</Button>
        </>
    )
}
import {  Box, Button, Checkbox, Divider, FormControlLabel, FormGroup, Typography } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';
import React, {useEffect,useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { useAuthState } from '../../context';

export function Operador(props){
    const [operador, setOperador] = useState({});
    const tokenUser = useAuthState().token;
    const idOperador = useParams().id;
    const history = useHistory();
    const [state,setState]=useState({
        checkedA: false
      });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
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

            console.log(data);
            history.push('/operadores/',{from:`/operadores/${idOperador}`})
        } catch (error) {
            console.log(error)
        }
        
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
            checkedA: false
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
                    <br/>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        type="submit"
                        disabled={!state.checkedA && !state.checkedB}
                    > Actualizar </Button>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        type="submit"
                        disabled
                    > Convertir en Administrador </Button>
                </FormGroup>
            </form>

            <br/>
            <br/>
            <Typography variant="h6" >
                Eliminar de forma permanente
            </Typography>
            <Typography variant="body2" >
                Esta es una operación irreversible.
                Los datos asociados al usuario como ventas realizadas no se borrarán.
            </Typography>
            <Box align="center">
                <Button 
                    variant="contained" 
                    color="secondary"
                    startIcon={<DeleteForever/>}
                > Eliminar Cuenta</Button>
            </Box>
        </>
    )
}
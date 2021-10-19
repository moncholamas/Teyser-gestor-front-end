import {  Add, Edit } from '@mui/icons-material';
import {  Box, Button, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState }  from 'react';
import { useAuthState } from '../../context';
import {ROOT_URL} from '../../context/actions';
import { nuevo, editar } from './functions';


export function MainEquipos({editable,actual,cambio}){  
    const tokenUser = useAuthState().token;

    const [otrosDatos, setOtrosDatos] = useState({});
    const [equipo, setEquipo] = useState({
        nombre_tecnico: "",
        nombre_fantasia: "",
        estado: "operativo",
        categoria: "impresora"
    });

    const handleChange = (event) => {
        setEquipo({...equipo, [event.target.name]: event.target.value });
      };

    function handleSubmit(e){
        e.preventDefault();
        const response = editable?
        editar(equipo,tokenUser,actual):
        nuevo(equipo,tokenUser);
        if(response!==(-1)){
            cambio(+1);
        }
    }

    

    function cargarDatosActuales(data){
        const {nombre_fantasia,nombre_tecnico,estado,categoria,createdAt,updatedAt} = data.data;
        setEquipo({
            nombre_fantasia:nombre_fantasia||'',
            nombre_tecnico:nombre_tecnico||'',
            estado:estado||'',
            categoria:categoria||''
        });
        setOtrosDatos({
            createdAt,
            updatedAt
        })
    }
    
    const cargarDatosParaUpdate = async function(){
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
        cargarDatosActuales(data);
            
        } catch (error) {
            console.log(error)   
        }
    }

    useEffect( () => {
        if(editable){
            cargarDatosParaUpdate();
        }
        
    }, [editable,actual])// eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <>

            <Typography variant="h5" align="center">
                {editable?"Editar: " : "Ingresar nuevo"}
            </Typography>
            <Box onSubmit={handleSubmit} component="form">
                
                <FormControl fullWidth>
                <TextField
                    required
                    id="nombre_tecnico"
                    name="nombre_tecnico"
                    label="Nombre técnico"
                    onChange={handleChange}
                    value={equipo.nombre_tecnico}
                    fullWidth
                    variant="filled"
                />
                </FormControl>
                <FormControl fullWidth >
                <TextField
                    required
                    id="nombre_fantasia"
                    name="nombre_fantasia"
                    label="Nombre de fantasia"
                    onChange={handleChange}
                    value={equipo.nombre_fantasia}
                    fullWidth
                    variant="filled"
                />
                </FormControl>

                <FormControl fullWidth>
                    
                    <Select
                    labelId="estado"
                    id="estado"
                    name="estado"
                    value={equipo.estado}
                    label="Estado"
                    onChange={handleChange}
                    variant="filled"
                    >
                    <MenuItem value={"operativo"} selected>Operativo</MenuItem>
                    <MenuItem value={"en mantenimiento"}>En Mantenimiento</MenuItem>
                    <MenuItem value={"inoperable"}>Inoperable</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                
                    <Select
                    labelId="categoria"
                    id="categoria"
                    name="categoria"
                    value={equipo.categoria}
                    label="Categoria"
                    onChange={handleChange}
                    variant="filled"
                    >
                    <MenuItem value={"impresora"} selected>Impresora</MenuItem>
                    <MenuItem value={"fotocopiadora"}>Fotocopiadora</MenuItem>
                    <MenuItem value={"libreria"}>Librería</MenuItem>
                    <MenuItem value={"red"}>Red</MenuItem>
                    <MenuItem value={"otro"}>Otro</MenuItem>
                    </Select>
                </FormControl>
                {
                    editable?
                    <FormControl fullWidth >
                        <TextField
                            disabled
                            id="standard-disabled"
                            value={otrosDatos.createdAt || ''}
                            label="Fecha de creación"
                            variant="filled"
                        />
                        <TextField
                            disabled
                            id="standard-disabled"
                            value={otrosDatos.updatedAt || ''}
                            label="Fecha de modificación"
                            variant="filled"
                        />
                    </FormControl>
                    :null
                }

                <br/>
                
            {
                editable?
                <Button fullWidth variant="contained" color="success" type="submit" startIcon={<Edit/>}> Editar Equipo existente</Button>
                :
                <Button fullWidth variant="contained" color="primary" type="submit" startIcon={<Add/>}> Cargar nuevo Equipo</Button>
            } 
            
            </Box>
            
            

            
        </>
    )
}
import {  Add, Edit } from '@mui/icons-material';
import {  Box, Button, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState }  from 'react';
import {ROOT_URL} from '../../context/actions';
import { nuevo, editar, eliminar, limpiarDatosActuales } from './functions';


export function MainEquipos({newmodo, actualizarmodo,actual,cambio,tokenUser}){  
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
        let response;
        
        switch (newmodo) {
            case 'edit':
                response = editar(equipo,tokenUser,actual);
                    break;
            case 'delete':
                response = eliminar(actual,tokenUser);
                    break;
            default:
                response = nuevo(equipo,tokenUser);
                    break;
        }
        
        if(response!==(-1)){
            cambio(+1);
            actualizarmodo('new');
            setEquipo(
                {
                    nombre_tecnico: "",
                    nombre_fantasia: "",
                    estado: "operativo",
                    categoria: "impresora"
                }
            )
        }else{
            console.log("error")
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
    
    const traerDatosActuales = async function(){
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
        if(newmodo === 'edit' || newmodo === 'delete' || newmodo === 'view'){
            traerDatosActuales();
        }
        if(newmodo === 'new'){
            setEquipo( limpiarDatosActuales());
        }
    }, [newmodo,actual])// eslint-disable-line react-hooks/exhaustive-deps
    
    return (
        <>

            <Typography variant="h5" align="center">
                {
                    (()=>{
                        switch (newmodo) {
                            case 'edit': return "Editar"
                            case 'delete': return "Borrar equipo existente"
                            case 'view': return "Detalles"
                            default: return "Ingresar uno nuevo"
                        }
                    })()
                
                }
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
                    newmodo==='edit' || newmodo ==='delete' || newmodo==='view'?
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
                (()=>{switch (newmodo) {
                    case "edit":
                        return <Button fullWidth variant="contained" color="success" type="submit" startIcon={<Edit/>}> Editar Equipo existente</Button>
                    case "delete":
                        return <Button fullWidth variant="contained" color="error" type="submit" startIcon={<Edit/>}> Borrar Equipo existente</Button>
                    case "view": return null;
                    default:
                        return <Button fullWidth variant="contained" color="primary" type="submit" startIcon={<Add/>}> Cargar nuevo Equipo</Button>
                    }})()
                } 
            
            </Box>
            
            

            
        </>
    )
}
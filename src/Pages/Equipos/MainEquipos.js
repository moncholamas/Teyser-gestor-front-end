import { Add } from '@mui/icons-material';
import {  Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState }  from 'react';


export function MainEquipos({editable,nuevo}){  

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
        console.log(equipo);
        nuevo(equipo);
    }
    
    return (
        <>

            <Typography variant="h5" align="center">
                Ingresar nuevo
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
                />
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                    <Select
                    labelId="estado"
                    id="estado"
                    name="estado"
                    value={equipo.estado}
                    label="Estado"
                    onChange={handleChange}
                    >
                    <MenuItem value={"operativo"} selected>Operativo</MenuItem>
                    <MenuItem value={"en mantenimiento"}>En Mantenimiento</MenuItem>
                    <MenuItem value={"inoperable"}>Inoperable</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                    <Select
                    labelId="categoria"
                    id="categoria"
                    name="categoria"
                    value={equipo.categoria}
                    label="Categoria"
                    onChange={handleChange}
                    >
                    <MenuItem value={"impresora"} selected>Impresora</MenuItem>
                    <MenuItem value={"fotocopiadora"}>Fotocopiadora</MenuItem>
                    <MenuItem value={"libreria"}>Librería</MenuItem>
                    <MenuItem value={"red"}>Red</MenuItem>
                    <MenuItem value={"otro"}>Otro</MenuItem>
                    </Select>
                </FormControl>
                <br/>
                
                
            <Button fullWidth variant="contained" color="primary" type="submit" startIcon={<Add/>}> Cargar nuevo Equipo</Button>
            </Box>


            
        </>
    )
}
import {  Button, TextField, Typography } from '@mui/material';
import React, { useState }  from 'react';


export function MainEquipos({editable,nuevo}){  

    const [equipo, setEquipo] = useState({
        nombre_tecnico: "",
        nombre_fantasia: "",
        estado: "",
        categoria: ""
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
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    id="nombre_tecnico"
                    name="nombre_tecnico"
                    label="Nombre técnico"
                    onChange={handleChange}
                    value={equipo.nombre_tecnico}
                    fullWidth
                />
                <br/>
                <TextField
                    required
                    id="nombre_fantasia"
                    name="nombre_fantasia"
                    label="Nombre de fantasia"
                    onChange={handleChange}
                    value={equipo.nombre_fantasia}
                    fullWidth
                />
                <br/>
                <TextField
                    required
                    id="estado"
                    name="estado"
                    label="Estado"
                    onChange={handleChange}
                    value={equipo.estado}
                    fullWidth
                />
                <br/>
                <TextField
                    required
                    id="categoria"
                    name="categoria"
                    label="Categoria"
                    onChange={handleChange}
                    value={equipo.categoria}
                    fullWidth
                />
                <br/>
                
            <Button fullWidth variant="contained" color="success" type="submit"> Cargar nuevo Equipo</Button>
            </form>


            
        </>
    )
}
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';



export function Logup(){
    const [valido, setValido] = useState(false);
    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        clave: '',
        showPassword: false,
      });

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        Object.values(values).some(value => (value === ''))?setValido(false):setValido(true);
      };
    
    const enviarForm = async (e)=>{
        const url="http://localhost:3009/ingresar/nuevo"
        e.preventDefault();
        
        const respuesta = await fetch(url,{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        const content = await respuesta.json();
        console.log(content);
    }

    return (
        <>
        <Grid item xs={10} mt={3}>
            <Typography variant="h3" align="center">
                Crea una cuenta
            </Typography>
            <Typography variant="h6" align="center">
                Registrate para comenzar
            </Typography>
        </Grid>
        
        <Grid item xs={10}>
            <Box component="form" textAlign="center" mt={3} onSubmit={enviarForm}>
                <TextField
                    id="nombre"
                    label="Nombre"
                    value={values.nombre}
                    variant="outlined"
                    onChange={handleChange('nombre')}
                />
                <br/><br/>
                <TextField
                    id="apellido"
                    label="Apellido"
                    value={values.apellido}
                    variant="outlined"
                    onChange={handleChange('apellido')}
                />
                <br/><br/>
                <TextField
                    id="correo"
                    label="Correo"
                    value={values.correo}
                    variant="outlined"
                    onChange={handleChange('correo')}
                />
                <br/><br/>
                <TextField
                    id="clave"
                    label="Clave"
                    value={values.clave}
                    variant="outlined"
                    onChange={handleChange('clave')}
                />
                <br/><br/>
                <Button 
                    color="primary" 
                    variant="contained" 
                    size="large"
                    type="submit"
                    disabled={(!valido)}
                >
                    Crear
                </Button>
                <Button color="secondary" variant="contained" size="large">
                    Borrar
                </Button>
            </Box>
        </Grid>
        
        </>
    );
}
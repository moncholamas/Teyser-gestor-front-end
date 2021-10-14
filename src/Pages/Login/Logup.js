import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
export function Logup(){
    const history = useHistory();
    const [valido, setValido] = useState(false);
    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        clave: '',
        claveConfirm: ''
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        Object.values(values).every(value => (value.length!==0))?setValido(true):setValido(false);
    };

    const compararClaves = ({clave,claveConfirm})=>{
        return clave === claveConfirm;
    }
    const enviarForm = async (e)=>{
        e.preventDefault();
        const url="http://localhost:3009/ingresar/nuevo"
        if(compararClaves(values)){
            const respuesta = await fetch(url,{
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            const content = await respuesta.json();
            if (!content)return;
            console.log(content);
            setTimeout(() => {
                history.push("/login",{from:"Logup"})
            }, 3000);
        }
        else{
            //cambiar validacion con alert de material UI
            alert("Las claves no son iguales");
        }
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
                    type="text"
                    value={values.nombre}
                    variant="outlined"
                    onChange={handleChange('nombre')}
                />
                <br/><br/>
                <TextField
                    id="apellido"
                    label="Apellido"
                    type="text"
                    value={values.apellido}
                    variant="outlined"
                    onChange={handleChange('apellido')}
                />
                <br/><br/>
                <TextField
                    id="correo"
                    label="Correo"
                    value={values.correo}
                    type="mail"
                    variant="outlined"
                    onChange={handleChange('correo')}
                />
                <br/><br/>
                <TextField
                    id="clave"
                    label="Clave"
                    value={values.clave}
                    type="password"
                    variant="outlined"
                    onChange={handleChange('clave')}
                />
                <br/><br/>
                <TextField
                    id="claveConfirm"
                    label="Reingrese la clave"
                    type="password"
                    value={values.claveConfirm}
                    variant="outlined"
                    onChange={handleChange('claveConfirm')}
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
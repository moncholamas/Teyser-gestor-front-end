import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import {Link as WLink} from 'wouter';
import {useLocation} from 'wouter';
import React, {useState} from 'react';

export function Login(){
    const [location, setLocation] = useLocation();
    const [valido, setValido] = useState(false);
    const [values, setValues] = useState({
        correo: '',
        clave: ''
      });

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        Object.values(values).some(value => (value === ''))?setValido(false):setValido(true);
      };

    const enviarForm = async (e) =>{
        e.preventDefault();
        const url = 'http://localhost:3009/ingresar'
        const res = await fetch(url,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
        })
        const contenido = await res.json();
        console.log(contenido);
        console.log(location);
        setTimeout(()=>{
            setLocation('/');
        },3000)
    }
    
    return (
        <>
        <Grid item xs={10} mt={3}>
            <Typography variant="h3" align="center">
                Ingresar
            </Typography>
            <Typography variant="h6" align="center">
                Inicie sesión para comenzar
            </Typography>
        </Grid>
        
        <Grid item xs={10}>
            <Box component="form" textAlign="center" mt={3} onSubmit={enviarForm}>
                <TextField
                    id="correo"
                    label="Correo"
                    value={values.correo}
                    variant="outlined"
                    onChange={handleChange("correo")}
                />
                <br/><br/>
                <TextField
                    id="clave"
                    label="Clave"
                    type="password"
                    value={values.clave}
                    variant="outlined"
                    onChange={handleChange("clave")}
                />
                <br/><br/>
                <Button 
                    color="primary" 
                    variant="contained" 
                    size="large"
                    type="submit"
                    disabled={!valido}
                >
                    Entrar
                </Button>
                <br/><br/>
                <WLink href="/nuevo" component={Link}>
                    <Link variant="body2">
                        Crear una cuenta.
                    </Link> 
                </WLink>
            </Box>
        </Grid>
        
        </>
    );
}
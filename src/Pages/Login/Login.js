import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import {Link as WLink, useHistory} from 'react-router-dom';
import React, {useState} from 'react';
import { loginUser, useAuthDispatch, useAuthState } from '../../context/';

export function Login(){
    const dispatch = useAuthDispatch();
    const history = useHistory();

    const {loading, errorMsg} = useAuthState();

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
        const payload = {correo: values.correo,clave: values.clave}
        try {
            let response = await loginUser(dispatch,payload);
            console.log(response);
            if (!response)return;
            history.push("/ventas",{from:"Login"})
        } catch (error) {
            //console.log(response)
            console.log(error)
        }        
    }
    
    return (
        <>
        <Grid item xs={12} mt={3}>
                {
                    loading ? <p>Cargadndo</p> : null
                }
                {
                    errorMsg ? <p>{errorMsg}</p> : null
                }
            <Typography variant="h3" align="center">
                Ingresar
            </Typography>
            <Typography variant="h6" align="center">
                Inicie sesión para comenzar
            </Typography>
        </Grid>
        
        <Grid item xs={12}>
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
                <Link component={WLink} to={'/nuevo'}>
                        <Typography variant="body2">
                            Crear una cuenta.
                        </Typography> 
                </Link>
                
            </Box>
        </Grid>
        
        </>
    );
}
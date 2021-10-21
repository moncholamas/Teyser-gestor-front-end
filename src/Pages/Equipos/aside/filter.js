import { ArrowBack } from '@mui/icons-material';
import { Button, FormControl, Grid} from '@mui/material';
import React, { useState } from 'react';

export function Filter({modo}){
    const [equipo, setEquipo] = useState({
        estado: "operativo",
        categoria: "impresora"
    });

    const handleChange = (event) => {
        setEquipo({...equipo, [event.target.name]: event.target.value });
      };

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            
            
            <Grid item >
                <Button 
                            variant="contained" 
                            size="medium"
                            startIcon={ <ArrowBack/> }
                            onClick={()=>modo(null,'new')}
                >  nuevo 
                        
                </Button>
            </Grid>
            <Grid item>
                <form>
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="secondary" 
                        size="medium"
                        disabled
                        onClick={()=>handleChange()}
                    >Filtrar
                    </Button>
                </form>
            </Grid>
            <Grid item >
                <form>
                    <FormControl>
                        <Button disabled variant="contained" size="medium">Buscar</Button>
                    </FormControl>
                </form> 
            </Grid>
        </Grid>
    );
}
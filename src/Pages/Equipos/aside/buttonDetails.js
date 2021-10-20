import { ContentCut, FileCopy, Print, SignalWifi1BarLock } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';

export function ButtonDetails({equipo, click}){
        let colorBoton;
        switch (equipo.estado) {
            case 'operativo': colorBoton = 'primary'
                break;
            case 'en mantenimiento': colorBoton = 'warning'
                break;
            case 'inoperable': colorBoton = 'error'
                break;
            default: colorBoton = 'inherit'
                break;
        }

        switch (equipo.categoria) {
            case 'impresora':
                return  <Button 
                            startIcon={<Print color={colorBoton}/>} 
                            variant="outlined" 
                            color="inherit"
                            onClick={()=>{click(equipo.id_equipo,'view')}}
                        >  {equipo.nombre_tecnico}
                        </Button>
            case 'fotocopiadora':
                return  <Button 
                            startIcon={<FileCopy/>} 
                            variant="outlined" 
                            color="inherit"
                        >  {equipo.nombre_tecnico}
                        </Button>
            case 'red':
                return  <Button 
                            startIcon={<SignalWifi1BarLock color={colorBoton}/>} 
                            variant="outlined" 
                            color="inherit"
                            onClick={()=>{click(equipo.id_equipo,'view')}}
                        >  {equipo.nombre_tecnico}
                        </Button>
            case 'libreria':
                return  <Button 
                            startIcon={<ContentCut color={colorBoton}/>} 
                            variant="outlined" 
                            color="inherit"
                            onClick={()=>{click(equipo.id_equipo,'view')}}
                        >  {equipo.nombre_tecnico}
                        </Button>
            default: return null
        }
}


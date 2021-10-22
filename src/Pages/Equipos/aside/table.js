import { Delete, Edit} from '@mui/icons-material';
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {makeStyles} from '@mui/styles'; 
import { ButtonDetails } from './buttonDetails';


export function TableAside({equipos,cambiarModo,modo}){  
    const activarEdicion = function(id,modonuevo){
        setIndiceActual(id);
        cambiarModo(id,modonuevo);
    };

    const useStyles = makeStyles({
        root:{
            background: '#EEE'
        }
    });
    const classes = useStyles();


    const [indiceActual,setIndiceActual] = useState(null)

    useEffect(() => {
        if(modo==='new') setIndiceActual(null);
    }, [modo])

    return (
        <>
            <TableContainer >
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="center">Nombre Técnico</TableCell>
                            <TableCell align="right" sx={{ display: { xs: 'none', md:'table-cell' } }}>Nombre de Fantasia</TableCell>
                            <TableCell align="right">Acciones</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            equipos.map(equipo => {
                                return <TableRow
                                            key={equipo.id_equipo}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                                            className={indiceActual===equipo.id_equipo?classes.root:null}
                                        
                                            >
                                            <TableCell align="center">
                                                <ButtonDetails 
                                                equipo={equipo}  
                                                click={activarEdicion}/>
                                            </TableCell>
                                            <TableCell align="right" sx={{ display: { xs: 'none', md:'table-cell' } }}>{equipo.nombre_fantasia}</TableCell>
                                            <TableCell align="right">
                                                <IconButton aria-label="edit" color="success" onClick={()=> activarEdicion(equipo.id_equipo,'edit')}>
                                                    <Edit />
                                                </IconButton>
                                                <IconButton aria-label="delete" color="error" onClick={()=> activarEdicion(equipo.id_equipo,'delete') }>
                                                    <Delete />
                                                </IconButton> 
                                                {console.log(indiceActual===equipo.id_equipo?'fila elegida':null, equipo.nombre_tecnico)}
                                            </TableCell>
                                    </TableRow>
                            })
                        }
                        </TableBody>
                    </Table>
            </TableContainer>
        </>
    )
}




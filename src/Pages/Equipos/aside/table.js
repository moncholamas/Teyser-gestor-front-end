import { Delete, Edit} from '@mui/icons-material';
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { ButtonDetails } from './buttonDetails';


export function TableAside({equipos,modo}){  
    const activarEdicion = function(id,modonuevo){
        modo(id,modonuevo);
    };

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
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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




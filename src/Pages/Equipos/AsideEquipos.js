import { Delete, Edit } from '@mui/icons-material';
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React  from 'react';


export function AsideEquipos({listado}){  
    
    return (
        <>
            <Typography variant="h5" align="center">
                Buscar
            </Typography>
                <TableContainer >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell align="right">Categoria</TableCell>
                            <TableCell align="right">Nombre Técnico</TableCell>
                            <TableCell align="right">Nombre de Fantasia</TableCell>
                            <TableCell align="right">Acciones</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            listado.map(equipo => {
                                return <TableRow
                                    key={equipo.id_equipo}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell align="right">{equipo.categoria}</TableCell>
                                    <TableCell align="right">{equipo.nombre_tecnico}</TableCell>
                                    <TableCell align="right">{equipo.nombre_fantasia}</TableCell>
                                    <TableCell align="right">
                                        <IconButton aria-label="delete" color="success">
                                            <Edit />
                                        </IconButton>
                                        <IconButton aria-label="delete" color="error">
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
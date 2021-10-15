import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React  from 'react';


export function AsideEquipos({listado}){  
    console.log(listado)
    return (
        <>
            <Typography variant="h5">
            
                <TableContainer >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
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
                                    <TableCell component="th" scope="row">
                                        {equipo.id_equipo}
                                    </TableCell>
                                    <TableCell align="right">{equipo.categoria}</TableCell>
                                    <TableCell align="right">{equipo.nombre_tecnico}</TableCell>
                                    <TableCell align="right">{equipo.nombre_fantasia}</TableCell>
                                    <TableCell align="right">{equipo.estado}</TableCell>
                                </TableRow>
                            })
                        }
                        </TableBody>
                    </Table>
                </TableContainer>

                
            </Typography>
        </>
    )
}
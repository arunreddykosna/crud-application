import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';


function TableData(props) {
    const history = useNavigate();
    function handleView(row) {
        console.log(row,'hhh')
        history('/about');
        localStorage.setItem('rowData',JSON.stringify((row)));
    }
    return (
        <div>
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Surname</TableCell>
                            <TableCell align="right">Desease</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data.map((row,index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.age}</TableCell>
                                <TableCell align="right">{row.surName}</TableCell>
                                <TableCell align="right">{row.desease}</TableCell>
                                <TableCell align="right">
                                    <IconButton color="primary" aria-label="delete" size="small" onClick={(e) => props.getSelected(row,index)}>
                                        <EditIcon fontSize="inherit" />
                                    </IconButton>
                                    <IconButton color="error" aria-label="delete" size="small">
                                        <DeleteIcon fontSize="inherit" onClick={e => props.deleteRow(index)}/>
                                    </IconButton>
                                    <IconButton color="error" aria-label="delete" size="small">
                                        <VisibilityIcon fontSize="inherit" onClick={(e) => handleView(row)}/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TableData;
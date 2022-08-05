import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import PendingList from './PendingList';



export default function ApplicationList() {



    return (
        <>
            <h1>NEW APPLICANT LIST</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Company Name</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">View</TableCell>
                            <TableCell align="right">Approve</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array(3).fill("abhi").map((doc, index) => (
                            <TableRow
                                key={doc.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {doc.companyname}
                                </TableCell>
                                <TableCell align="right">{doc.name}</TableCell>

                                <TableCell align="right">{<Button color='primary' variant="outlined" onClick={(e) => e}>View</Button>}</TableCell>
                                <TableCell align="right">{<Button color='warning' variant="outlined">Pending</Button>}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <PendingList />
        </>

    );
}
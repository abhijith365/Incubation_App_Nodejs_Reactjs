import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


export default function PendingList({ data }) {

    const viewedData = data.data?.filter((item) => { return (item.adminView) })

    return (
        <>

            <h1>PENDING LIST</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Company Name</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">View</TableCell>
                            <TableCell align="right">Decline</TableCell>
                            <TableCell align="right">Approve</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {viewedData?.map((item, index) => (
                            <TableRow
                                key={`${item._id + index + "rondom"}`}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {item.companyName}
                                </TableCell>
                                <TableCell align="right">{item.name}</TableCell>
                                <TableCell align="right">{<Button variant="outlined" onClick={() => data.viewHandleClick(item._id)}>View</Button>}</TableCell>
                                <TableCell align="right">{<Button color='error' onClick={() => data.viewHandleClick(item._id, 'reject')} variant="outlined">Decline</Button>}</TableCell>

                                <TableCell align="right">{<Button color='success' onClick={() => data.viewHandleClick(item._id, 'approved')} variant="outlined">Accept</Button>}</TableCell>

                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>

    );
}
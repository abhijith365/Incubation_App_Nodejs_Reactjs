import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


export default function CompleteApplication({ data }) {

    const viewedData = data.data?.filter((item) => { return (!item.adminView && (item.approved || item.reject)) })

    return (
        <>

            <h1>COMPLETED APPLICATION LIST</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Company Name</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">View</TableCell>
                            <TableCell align="right">Status</TableCell>

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
                                <TableCell align="right">{<Button color={(item.reject) ? 'error' : (item.approved) ? 'success' : ''} variant="contained">
                                    {(item.reject) ? 'Application Rejected' : (item.approved) ? 'Application Approved' : ''}</Button>}</TableCell>



                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>

    );
}
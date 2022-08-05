import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';





export default function PendingList() {



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
                        {Array(3).fill("Abhijith").map((doc, index) => (
                            <TableRow
                                key={doc.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {doc.companyname}
                                </TableCell>
                                <TableCell align="right">{doc.name}</TableCell>
                                <TableCell align="right">{<Button variant="outlined" onClick={(e) => e}>View</Button>}</TableCell>
                                <TableCell align="right">{<Button color='error' onClick={(e) => e} variant="outlined">Decline</Button>}</TableCell>

                                <TableCell align="right">{<Button color='success' onClick={(e) => e} variant="outlined">Accept</Button>}</TableCell>

                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {Array(3).fill("Abhijith").map((doc, index) => (
                <Dialog
                    // key={doc.id}
                    // open={open}
                    // onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <h4>Name : {doc.id}</h4>
                            <h4>Company name : {doc.companyname}</h4>
                            <h4>Email : {doc.email}</h4>
                            <h4>Phone : {doc.phone}</h4>
                            <h4>Address : {doc.address}</h4>
                            <h4>Name : {doc.name}</h4>
                            <h4>Name : {doc.name}</h4>
                            <h4>Name : {doc.name}</h4>
                            <h4>Name : {doc.name}</h4>
                            <h4>Name : {doc.name}</h4>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button >Disagree</Button>
                        <Button autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            ))}

        </>

    );
}
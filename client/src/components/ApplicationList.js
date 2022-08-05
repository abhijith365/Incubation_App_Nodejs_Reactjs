import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import PendingList from './PendingList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CompleteApplication from './Admin/CompleteApplication';



export default function ApplicationList() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [popupDate, setPopUpData] = useState([])
    const [notViewedData, setNotViewedData] = useState([])
    const [on, setOn] = useState(false)

    useEffect(() => {
        setLoading(true)
        let token = localStorage.getItem('adminConfig')
        let header = { headers: { "Authorization": `Bearer ${token}` } }
        axios.get('http://127.0.0.1:8888/api/user/forms', header).then(res => setData(res.data))
        setNotViewedData(data?.filter((item) => ((!item.reject || !item.approved) && !item.adminView)))
        setLoading(false)

    }, [on, popupDate, loading])


    const viewHandleClick = (id, name = null) => {
        setLoading(true)
        setOn(false)
        const item = data.filter(e => e._id === id)
        setPopUpData(item)
        handleClose(false)

        let token = localStorage.getItem('adminConfig')
        let header = { headers: { "Authorization": `Bearer ${token}` } }

        if (name != null) {
            axios.post('http://127.0.0.1:8888/api/user/updateViewForm', { id: id, placeholder: name }, header).then(res => res.data)
        }
        setNotViewedData(data?.filter((item) => !item.adminView))
        setOn(true)
        setLoading(false)
    }
    const handleClose = (e) => { return e }



    return (
        <>
            {loading ? "Loading ..." : (
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
                                {notViewedData?.map((item, index) => (
                                    <TableRow
                                        key={`${item._id + index + "newOne"}`}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {item.companyName}
                                        </TableCell>
                                        <TableCell align="right">{item.name}</TableCell>

                                        <TableCell align="right">{<Button color='primary' variant="outlined" onClick={() => { viewHandleClick(item._id, 'adminView') }}>View</Button>}</TableCell>
                                        <TableCell align="right">{<Button color='warning' variant="outlined">Pending</Button>}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {popupDate?.map((item, index) => (
                        <Dialog
                            key={`${item._id + "dnkdn"}`}
                            open={on}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"NEW APPLICANT LIST?"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <p>Name : {item.name}</p>
                                    <p>Company name : {item.companyName}</p>
                                    <p>Email : {item.email}</p>
                                    <p>Phone : {item.phone}</p>
                                    <p>Address : {item.address}</p>
                                    <p>city : {item.city}</p>
                                    <p>state : {item.state}</p>
                                    <p>createdAt : {item.createdAt}</p>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>

                                <Button autoFocus onClick={() => setOn(false)}>
                                    Close
                                </Button>
                            </DialogActions>
                        </Dialog>
                    ))}
                    <PendingList data={{ data, on, viewHandleClick }} />
                    <CompleteApplication data={{ data, on, viewHandleClick }} />
                </>
            )
            }
        </>

    );
}
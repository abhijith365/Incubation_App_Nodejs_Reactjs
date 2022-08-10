import { useEffect, useState } from 'react'
import axios from 'axios'
import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';


export default function BookingSloat() {

    const [activeCol, setActiveCol] = useState([])
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [loader, setLoader] = useState(false)
    const [onClick, setOnClick] = useState(false)
    const [open, setOpen] = useState(false);



    useEffect(() => {
        setLoader(true)
        const token = localStorage.getItem('adminConfig')
        const header = { headers: { "Authorization": `Bearer ${token}` } }
        axios.get('http://127.0.0.1:8888/api/user/forms', header).then(res => setData(res.data))
        setFilterData(data?.filter((item) => (item.reject || item.approved)))
        setLoader(false)
    }, [onClick])

    console.log(filterData)
    const onHandleClick = (id) => {
        handleClickOpen()
        setActiveCol(() => [...activeCol, id])
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };


    const style = {
        topBox: {
            display: 'flex',
            'justifyContent': 'center',
            alignItems: 'center',
        },
        insideTopBox: {

            width: '10rem',
            height: '5.5rem',
            margin: "8px 10px",
            backgroundColor: 'blue'
        },
        insideBottomBox: {
            width: '5.3rem',
            height: '5.5rem',
            margin: "12px 10px",
            backgroundColor: 'blue'
        },
        insideActiveBox: {
            width: '5.3rem',
            height: '5.5rem',
            margin: "12px 10px",
            backgroundColor: "yellow"
        },
        hr: {
            width: '100%',
            margin: '1rem auto',
            height: '2px',
            backgroundColor: 'black',
        },
        vHr: {
            position: 'absolute',
            width: '2px',
            margin: '1rem auto',
            height: '50vh',
            backgroundColor: 'black',
        }
        ,
        bottomBox: {
            display: 'flex',
            'justifyContent': 'center',
            alignItems: 'center',
            marginTop: '1rem'
        },
        activeBox: {
            width: '10rem',
            height: '6.3rem',
            margin: "8px 10px",
            backgroundColor: "yellow"
        },
        gridContainer: {
            display: 'grid',
            gridTemplateColumns: 'auto auto auto  auto auto  auto auto auto auto auto',
        }

    }

    /* <>
                        {(i === 9) ?
                            <>
                                <div key={`${i + "topBox"}`} style={(activeCol.includes(i + 1)) ? style.activeBox : style.insideTopBox} onClick={() => { onHandleClick(i + 1) }} className={"topbox"}>
                                    <div style={style.topBox}>{i + 1}</div>
                                </div>
                                <div style={style.hr} />
                                <div style={style.hr} />

                            </>
                            :
                            <div key={`${i + "topBox"}`} style={(activeCol.includes(i + 1)) ? style.activeBox : style.insideTopBox} onClick={() => { onHandleClick(i + 1) }} className={"topbox"}>
                                <div style={style.topBox}>{i + 1}</div>
                            </div>

                        }


                    </> */


    return (
        <>
            {/* Top boxes */}

            <div className="topRow" style={style.topBox}>
                {Array(10).fill(null).map((item, i) => (
                    <div key={`${i + 11 + "topBox"}`} style={(activeCol.includes(i + 11)) ? style.activeBox : style.insideTopBox} onClick={() => { onHandleClick(i + 11) }} className={"topbox"}>
                        <div style={style.topBox}>{i + 1}</div>
                    </div>
                ))}
            </div>
            <div style={style.hr} />
            <div style={style.hr} />


            {/* Bottom box */}

            <div className="topRow" style={style.gridContainer}>
                {Array(30).fill(null).map((item, i) => (
                    <>
                        <div key={`${i + 12 + "topBox"}`} style={(activeCol.includes(i + 21)) ? style.insideActiveBox : style.insideBottomBox} onClick={() => { onHandleClick(i + 21) }} className={"topbox"}>
                            <div style={style.topBox}>{i + 21}</div>
                        </div>

                    </>

                ))}
            </div>

            <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"select solt for users"}</DialogTitle>
                <DialogContent>
                    {/* <Autocomplete
                        // disablePortal
                        id="combo-box-demo"
                        options={filterData}
                        getOptionLabel={(option) => option}
                        sx={{ width: 300 }}
                    // renderInput={(params) => <TextField {...params} label="user" />} */}
                    {/* /> */}
                    <select>
                        {filterData?.map(item => (
                            <option>{item.name}</option>
                        ))}

                    </select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Assign</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

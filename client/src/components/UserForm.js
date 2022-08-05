import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import { Box } from '@mui/system';
import Formvalidate from '../utils/UserFormValidator';
import axios from 'axios'

export default function UserForm() {


    const [formData, setFormData] = useState({})
    const [error, setError] = useState({})
    const [onSubmit, setOnSubmit] = useState(false)

    useEffect(() => {
        if (onSubmit) {
            console.log(error)
            setError(() => Formvalidate(formData))
        }


    }, [formData])


    //for submiting form
    const handleSubmit = async (e) => {
        setOnSubmit(true)
        e.preventDefault();
        setError(() => Formvalidate(formData))
        if (Object.keys(error).length === 0 && onSubmit) {

            let token = localStorage.getItem('userConfig')

            let header = { headers: { "Authorization": `Bearer ${token}` } }
            const data = await axios.post('http://127.0.0.1:8888/api/user/formSubmit', formData, header)

            console.log(data)
            // if (data.status === 201) {
            //     auth.checkUser(data.data)
            //     navigate('/home', { replace: true })
            // }
            // else {
            //     setFormError({ "error": data.message })
            // }
        }
    }
    //changing form values 
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }



    return (
        <Fragment>
            <Container component="main" maxWidth="sm" >
                <Typography variant="h5" pt={2} align={'center'} gutterBottom>
                    APPLICATION FOR INCUBATION
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

                    <Grid container spacing={3} >
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error={error.name ? true : false}
                                helperText={error.name ? error.name : ''}
                                required
                                onChange={handleChange}
                                id="name"
                                name="name"
                                label="Name"
                                fullWidth
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error={error.address ? true : false}
                                helperText={error.address ? error.address : ''}
                                required
                                onChange={handleChange}
                                id="address"
                                name="address"
                                label="Address"
                                fullWidth
                                variant="standard"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                error={error.city ? true : false}
                                helperText={error.city ? error.city : ''}
                                required
                                onChange={handleChange}
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error={error.state ? true : false}
                                helperText={error.state ? error.state : ''}
                                required
                                onChange={handleChange}
                                id="state"
                                name="state"
                                label="State"
                                fullWidth
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error={error.email ? true : false}
                                helperText={error.email ? error.email : ''}
                                required
                                onChange={handleChange}
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error={error.phone ? true : false}
                                helperText={error.phone ? error.phone : ''}
                                required
                                onChange={handleChange}
                                id="phone"
                                name="phone"
                                label="Phone no"
                                fullWidth
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error={error.companyName ? true : false}
                                helperText={error.companyName ? error.companyName : ''}
                                required
                                onChange={handleChange}
                                id="companyName"
                                name="companyName"
                                label="Company Name"
                                fullWidth
                                autoComplete="shipping address-line1"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                error={error.companyLogo ? true : false}
                                helperText={error.companyLogo ? error.companyLogo : ''}
                                required
                                onChange={handleChange}
                                id="companyLogo"
                                name="companyLogo"
                                label="Company Logo"
                                fullWidth
                                variant="standard"
                                type={'file'}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={error.teamBackground ? true : false}
                                helperText={error.teamBackground ? error.teamBackground : ''}
                                required
                                onChange={handleChange}
                                multiline
                                rows={4}
                                id="teamBackground"
                                name="teamBackground"
                                label="Describe Your Team and Background"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={error.companyAndProduct ? true : false}
                                helperText={error.companyAndProduct ? error.companyAndProduct : ''}
                                required
                                onChange={handleChange}
                                multiline
                                rows={4}
                                id="companyAndProduct"
                                name="companyAndProduct"
                                label="Describe Your Company and Products"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={error.problemTryToSolve ? true : false}
                                helperText={error.problemTryToSolve ? error.problemTryToSolve : ''}
                                required
                                onChange={handleChange}
                                multiline
                                rows={4}
                                id="problemTryToSolve"
                                name="problemTryToSolve"
                                label="Describe the problem your are trying to solve"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={error.uniqueSolution ? true : false}
                                helperText={error.uniqueSolution ? error.uniqueSolution : ''}
                                required
                                onChange={handleChange}
                                multiline
                                rows={4}
                                id="uniqueSolution"
                                name="uniqueSolution"
                                label="What is unique about your solution"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={error.propositionOfCust ? true : false}
                                helperText={error.propositionOfCust ? error.propositionOfCust : ''}
                                required
                                onChange={handleChange}
                                multiline
                                rows={4}
                                id="propositionOfCust"
                                name="propositionOfCust"
                                label="What is your value proposition for the cusomer"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={error.competAndAdvCompet ? true : false}
                                helperText={error.competAndAdvCompet ? error.competAndAdvCompet : ''}
                                required
                                onChange={handleChange}
                                multiline
                                rows={4}
                                id="competAndAdvCompet"
                                name="competAndAdvCompet"
                                label="Who are your competitors and what is your competative advantage"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={error.revModel ? true : false}
                                helperText={error.revModel ? error.revModel : ''}
                                required
                                onChange={handleChange}
                                multiline
                                rows={4}
                                id="revModel"
                                name="revModel"
                                label="Explain Your revenue model"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={error.potentialMarketSizeOfPro ? true : false}
                                helperText={error.potentialMarketSizeOfPro ? error.potentialMarketSizeOfPro : ''}
                                required
                                onChange={handleChange}
                                multiline
                                rows={4}
                                id="potentialMarketSizeOfPro"
                                name="potentialMarketSizeOfPro"
                                label="What is the potential market size of the product"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={error.planMarketProdAndServ ? true : false}
                                helperText={error.planMarketProdAndServ ? error.planMarketProdAndServ : ''}
                                required
                                onChange={handleChange}
                                multiline
                                rows={4}
                                id="planMarketProdAndServ"
                                name="planMarketProdAndServ"
                                label="How do you market or plan to market your products and services"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl
                                error={error.typeOfIncu ? true : false}
                            >
                                <FormLabel id="typeOfIncu" >Type of Incubation needed *</FormLabel>

                                <RadioGroup
                                    row
                                    aria-labelledby="typeOfIncu"
                                    name="typeOfIncu"
                                    onChange={handleChange}
                                    // defaultValue="Physical Incubation"
                                    // value={value}
                                    error={"kdjkdj"}
                                    required
                                >

                                    <FormControlLabel value="Physical Incubation" control={<Radio />} label="Physical Incubation" />
                                    <FormControlLabel value="Virtual Incubation" control={<Radio />} label="Virtual Incubation" />

                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={error.businessProposal ? true : false}
                                helperText={error.businessProposal ? error.businessProposal : ''}
                                required
                                onChange={handleChange}
                                multiline
                                rows={4}
                                id="businessProposal"
                                name="businessProposal"
                                label="Upload a detailed bussiness proposal"
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                style={{ marginTop: "20px" }}
                            >
                                Submit
                            </Button>
                        </Grid>


                    </Grid>
                </Box>
            </Container >
        </Fragment>
    );
}
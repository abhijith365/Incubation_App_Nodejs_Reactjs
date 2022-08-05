import { useEffect, useState } from 'react';
import axios from 'axios';
import { AuthUser } from './AuthRouter';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
    Typography,
    Container,
    createTheme,
    ThemeProvider
} from '@mui/material';



const theme = createTheme();

export default function SignIn() {

    let auth = AuthUser()
    let navigate = useNavigate()


    const initialUser = { "email": "", "password": "" }
    const [user, setUser] = useState(initialUser)
    const [isSubmit, setIsSubmit] = useState(false)
    const [formError, setFormError] = useState({})
    const [userData, setUserData] = useState(false)
    // const [data, setData] = useState(null)

    useEffect(() => {

        if (isSubmit) {
            setFormError(() => validate(user))
        }
    }, [user])

    const handleSubmit = async (e) => {
        setIsSubmit(true)
        e.preventDefault();
        setFormError(() => validate(user))

        if (Object.keys(formError).length === 0 && isSubmit) {

            const { data } = await axios.post('http://127.0.0.1:8888/api/auth/user', user)

            if (data.status == 201) {
                auth.checkUser(data.data)
                navigate('/home', { replace: true })
            }
            else {
                setFormError({ "error": data.message })
            }


        }

    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    //form validation 
    const validate = (value) => {
        const error = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!value.email) {
            error.email = "email is required"
        } else if (!regex.test(value.email)) {
            error.email = "Invalide email format"

        }
        if (!value.password) {
            error.password = "password is required"
        } else if (value.password.length < 5) {
            error.password = "password must be more than 4 characters"
        } else if (value.password.length > 11) {
            error.password = "password must be with in 10 characters"
        }

        return error
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Box
                    sx={{
                        marginTop: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h1" variant="h4" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: '30px'
                    }}>
                        Sign in
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            error={formError.email ? true : false}
                            helperText={formError.email ? formError.email : ''}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={handleChange}
                            autoFocus
                        />
                        <TextField
                            error={formError.password ? true : false}
                            helperText={formError.password ? formError.password : ''}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={handleChange}
                            autoComplete="current-password"

                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            style={{ marginTop: "20px" }}
                        >
                            Sign In
                        </Button>
                        <Grid container style={{ marginTop: '10px' }} >
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        {(formError.error) &&
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                style={{
                                    marginTop: "20px",
                                    backgroundColor: "red"
                                }}
                            >
                                {(formError.error) ? formError.error : ''}
                            </Button>
                        }
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}
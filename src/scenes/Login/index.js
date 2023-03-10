import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@mui/material/Alert';
import Grid from '@material-ui/core/Grid';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@material-ui/core/Container';
import jwt from 'jwt-decode';
import Cookies from 'universal-cookie';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import KeyIcon from '@mui/icons-material/Key';
import Snackbar from '@mui/material/Snackbar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './style.css';


const useStyles = makeStyles((theme) => ({
  container:
  {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  body:
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(0deg, rgba(62,64,75,1) 0%, rgba(62,64,75,1) 75%, rgba(40,43,54,1) 100%)'
  },
  paper:
  {
    marginTop: theme.spacing(8),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form:
  {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#282c34',
    color: 'white',
  },
  textField: {

    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [user, setUser] = useState('');

  const id = cookies.get('userid');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');

  const [isUmpMail, setUmpMail] = useState(false);
  const [isReg, setReg] = useState(false);
  const [isError, setError] = useState(false);

  const [open, setOpen] = React.useState(false);


  const handleProgressClose = () => {
    setOpen(false);
  };

  const handleProgressToggle = () => {
    setOpen(!open);
  };

  const handleProgressClick = () => {
    handleProgressToggle();
    setTimeout(() => {
      handleProgressClose();
      navigate('/')
    }, 500);
  };


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setUmpMail(false);
    setError(false);
    setReg(false);
  };

  const userLogin = (jwt_token) => {
    const decoded = jwt(jwt_token);

    setUser(decoded);

    cookies.set("token", jwt_token, {
      expires: new Date(decoded.exp * 1000),
    });
  };

  const userIdent = (userId) => {
    cookies.set("userid", userId, {
      expires: new Date(userId.exp * 1000),
    });
  };

  function checkEmailFormat(email) {
    const regex = /^[a-z]+\.[a-z]+\d{2}@ump\.ac\.ma.*$/;
    return regex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkEmailFormat(email)) {
      axios.post("http://localhost:8080/v1/auth/login", { email, password })
        .then(response => {
          console.log(response);
          if (response.status === 200) {
            setReg(true)
            userIdent(response.data.id);
            userLogin(response.data.token);
            setTimeout(() => {
              handleProgressClick();
            }, 300);
          }
        })
        .catch(error => {
          setError(true)
        });
    }
    else {
      setError(false);
      setUmpMail(true);
    }
  }

  return (
    <div className={classes.body}>
      <Container maxWidth="xs">
        <div className={classes.paper} style={{ padding: 20 }}>
          <Grid container className={classes.container}>
            <form className='form-props' noValidate onSubmit={handleSubmit}>
              <Grid container spacing={3} >
                <Grid item xs={12}>
                  <TextField
                    className="textfield"
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    color='error'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className="textfield"
                    variant="outlined"
                    required
                    type="password"
                    fullWidth
                    id="Password"
                    label="Password"
                    name="Password"
                    autoComplete="password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <KeyIcon />
                        </InputAdornment>
                      ),
                    }}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid container justify="center" alignItems="center" >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open={open}
                  onClick={handleProgressClose}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
              </Grid>
            </form>
          </Grid>
        </div>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={isUmpMail} autoHideDuration={5000} onClose={handleClose}>
            <Alert variant="filled" color="warning" onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
              Please use an valid @ump.ac.ma email !
            </Alert>
          </Snackbar>
          <Snackbar open={isReg} autoHideDuration={5000} onClose={handleClose}>
            <Alert variant="filled" color="success" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Welcome {first_name} {last_name} !
            </Alert>
          </Snackbar>
          <Snackbar open={isError} autoHideDuration={5000} onClose={handleClose}>
            <Alert variant="filled" color="error" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              Incorrect email or password, try again !
            </Alert>
          </Snackbar>
        </Stack>
      </Container>
    </div>
  );
};
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
  submit:
  {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#4c9aff',
    color: 'white',
  },
  textField: {
    fontColor: 'white',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
}));

function checkEmailFormat(email) {
  const regex = /^[a-z]+\.[a-z]+\d{2}@ump\.ac\.ma.*$/;
  return regex.test(email);
}

export default function emailForm() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [isError, setError] = useState(false);

  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [isSuccess, setSuccess] = useState(false);
  const [age, setAge] = useState('');

  const [isUmpMail, setUmpMail] = useState(false);
  const [isExists, setExists] = useState(false);
  const [isReg, setReg] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setUmpMail(false);
    setExists(false);
    setReg(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkEmailFormat(email)) {
      axios.post("http://localhost:8080/v1/auth/email", { email })
        .then(response => {
          if (response.status === 403) {
            setExists(true);
            setError(false);
          }
          else {
            setExists(false)
            setError(false);
          }
          if (response.status === 200) {
            setError(true);
            setReg(true)
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
          }
        })
        .catch(setExists(true))
    }
    else {
      setError(false);
      setUmpMail(true);
    }
  }

  return (
    <div>
      {!isError ? (<div className={classes.body}>
        <Container maxWidth="xs">
          <div className={classes.paper} style={{ padding: 20 }}>
            <Grid container className={classes.container}>
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <Grid container spacing={3}>
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
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Grid container justify="center" alignItems="center">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                  >
                    Verify
                  </Button>
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
                Welcome !
              </Alert>
            </Snackbar>
            <Snackbar open={isError} autoHideDuration={5000} onClose={handleClose}>
              <Alert variant="filled" color="error" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                Incorrect email or password, try again !
              </Alert>
            </Snackbar>
          </Stack>
        </Container>
      </div>) : (<div className={classes.body}>
        <Container className={classes.container}>
          <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={10} sm={4}>
                <TextField
                  required
                  id="firstName"
                  label="First Name"
                  fullWidth
                  variant="outlined"
                  value={first_name}
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="lastName"
                  label="Last Name"
                  fullWidth
                  variant="outlined"
                  value={last_name}
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="Email Adress"
                  label="Email Adress"
                  fullWidth
                  variant="outlined"
                  value={email}
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="password"
                  label="Password"
                  fullWidth
                  variant="outlined"
                  value={secret}
                  onChange={e => setSecret(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  id="apogeeNumber"
                  label="Apogee Number"
                  fullWidth
                  variant="outlined"
                  value={age}
                  onChange={e => setAge(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Sign up
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>)}
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={isUmpMail} autoHideDuration={5000} onClose={handleClose}>
          <Alert variant="filled" color="warning" onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
            Please use an valid @ump.ac.ma email !
          </Alert>
        </Snackbar>
        <Snackbar open={isReg} autoHideDuration={5000} onClose={handleClose}>
          <Alert variant="filled" color="success" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Welcome, {first_name} {last_name}
          </Alert>
        </Snackbar>
        <Snackbar open={isExists} autoHideDuration={5000} onClose={handleClose}>
          <Alert variant="filled" color="error" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Account already exists, try to sign in instead
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
}
import React from 'react';
import { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import jwt from 'jwt-decode';
import Cookies from 'universal-cookie';
import Container from '@material-ui/core/Container';
import Alert from '@mui/material/Alert';
import axios from "axios";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';

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
    fontColor: 'white',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
}));

const AuthPage = (props) => {
  const classes = useStyles();
  const [user, setUser] = useState();
  const [username, setUsername] = useState('');
  const [secret, setSecret] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuth, setAuth]= useState('');
  const [isUmpMail, setUmpMail] = useState(false);
  const [isError, setError] = useState(false);
  const cookies = new Cookies();
  const id = cookies.get('userid');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') 
    {
      return;
    }
    setUmpMail(false);
    setError(false);
  };

  useEffect(() => {
    axios.get('http://localhost:8080/v1/auth/student/' + id)
      .then(response => 
      {
        setAuth(true);
        setUsername(response.data.email);
        
      })
      .catch(error => {
      });

  }, []);

  const onLogin = (e) => 
  {
    e.preventDefault();
    if (username.endsWith("@ump.ac.ma")) 
    { 
      setEmail(username);
      setPassword(secret);
      
      axios
        .post("http://localhost:8080/v1/auth/groupchat/login", { username, secret })
        .then(response => { props.onAuth({ ...response.data, secret }) })
        .catch((e) => setError(true));
    }
    else if(username === "" || !username.endsWith("@ump.ac.ma"))
    {
        setUmpMail(true);
    }
  };

  return (
    <div className={classes.body}>
      <Container maxWidth="xs">
        <div className={classes.paper} style={{ padding: 20 }}>
          <Grid container className={classes.container}>
            <form className={classes.form} noValidate onSubmit={onLogin}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <div>
                    {isAuth ?
                      (
                        <TextField
                          className="textfield"
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          disabled
                          value={username} />
                      )
                      : (<TextField
                        className="textfield"
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                      />)}
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    value={secret}
                    onChange={e => setSecret(e.target.value)}
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
                  Sign In
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
          <Snackbar open={isError} autoHideDuration={5000} onClose={handleClose}>
            <Alert variant="filled" color="error" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              Incorrect email or password, try again !
            </Alert>
          </Snackbar>
        </Stack>
      </Container>
    </div >
  );
};

export default AuthPage;
import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    container: {
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
        background:'linear-gradient(0deg, rgba(62,64,75,1) 0%, rgba(62,64,75,1) 75%, rgba(40,43,54,1) 100%)', 
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
        backgroundColor: '#4c9aff',
        color: 'white',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%',
      },
}));

export default function SignUpForm() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();
  const [apogeeNumber, setApoogeNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const email = username;
    const password = secret;

    axios.post("http://localhost:8080/v1/auth/register", { email, password })
      .then(response => 
      {
      console.log(response.data);
      if(response.status === 200)
      {
          // TODO NAVIGATION TO HOME PAGE
      }  
      })
      .catch(error => {
        console.log(error);
      });
    axios
    .post("http://localhost:8080/v1/auth/groupchat/register", {
      username,
      secret,
      email,
      first_name,
      last_name,
      })
      .then((r) => e({ ...r.data, secret })) // NOTE: over-ride secret
  }



  return (
    <div className={classes.body}>
      <Container className={classes.container}>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={10} sm={6}>
              <TextField
                required
                id="firstName"
                label="First Name"
                fullWidth
                variant="outlined"
                value={first_name}
                onChange={e => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                label="Last Name"
                fullWidth
                variant="outlined"
                value={last_name}
                onChange={e => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="Email Adress"
                label="Email Adress"
                fullWidth
                variant="outlined"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12}>
              <TextField
                required
                id="apogeeNumber"
                label="Apogee Number"
                fullWidth
                variant="outlined"
                value={apogeeNumber}
                onChange={e => setApoogeNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">
                Sign in
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}

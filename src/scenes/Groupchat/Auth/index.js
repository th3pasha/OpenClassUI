import React from 'react';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import axios from "axios";
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
    background:'linear-gradient(0deg, rgba(62,64,75,1) 0%, rgba(62,64,75,1) 75%, rgba(40,43,54,1) 100%)'
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

const AuthPage = (props) => 
{
  const classes = useStyles();
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/v1/auth/groupchat/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  

  return (
    <div className={classes.body}>
    <Container maxWidth="xs"> 
      <div className={classes.paper} style={{ padding: 20 }}>
      <Grid container className={classes.container}>
      <form className={classes.form} noValidate onSubmit={onLogin}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                 className = "textfield"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField 
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
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
    </Container>
</div>
  );
};

export default AuthPage;
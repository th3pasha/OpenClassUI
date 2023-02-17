import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import jwt from 'jwt-decode';
import Cookies from 'universal-cookie';
import "./style.css";

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
    backgroundColor: "#36393F"
  },
  paper: 
  {
    marginTop: theme.spacing(8),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#36393F"
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

export default function SignIn() {
  const classes = useStyles();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogout = () => {
    setUser(null);
    cookies.remove("token");
  };
  
  const userLogin = (jwt_token) =>
  {
      const decoded = jwt(jwt_token);
  
      setUser(decoded);
  
      cookies.set("token", jwt_token, {
        expires: new Date(decoded.exp *1000),
      });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/v1/auth/login", { email, password })
      .then(response => 
      {
        console.log(response);
        if (response.status === 200) 
        {
          userLogin(response.data.token);
          navigate('/navbar');
        }

      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className={classes.body}>
        <Container maxWidth="xs"> 
          <div className={classes.paper} style={{ padding: 20 }}>
          <Grid container className={classes.container}>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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
                    value={password}
                    onChange={e => setPassword(e.target.value)}
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
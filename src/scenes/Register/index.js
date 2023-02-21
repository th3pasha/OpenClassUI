import React, { useState, useEffect } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';



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


export default function emailForm() 
{
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [isError, setError] = useState(false);
    const [isReg, setReg] = useState(false);
    const [isUmpEmail, setUmpEmail] = useState(true);
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');

    function ShowSuccessAlert () 
    {
      return (
        <Alert variant = "filled" color = "success" severity="success"> Welcome {first_name} {last_name} </Alert>
      );
    }


    function ShowEmailAlert () 
    {
      return (
        <Alert variant = "filled" color = "warning" severity="warning"> Please use an valid @ump.ac.ma email !</Alert>
      );
    }
   

    const handleSubmit = (e) => 
    {
      e.preventDefault();
      if(email.endsWith("@ump.ac.ma"))
      {
        setUmpEmail(true);
        axios.post("http://localhost:8080/v1/auth/email", { email })
        .then(response => 
        {
        if (response.status === 200) 
        {
          console.log(response.data);
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setError(false);
          setReg(true);
        }

      })
      .catch(error => 
      { 
        setReg(false);
        setError(true);
      });
    }
    else
    {
      setReg(false);
      setUmpEmail(false);
    }
    }

    return (
        <div className={classes.body} >
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
              </Grid>
              <Grid container justify="center" alignItems="center">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                >
                  Sign up
                </Button>
              </Grid>
            <div>
              {isReg ? (<ShowSuccessAlert/>) : (null)}
            </div>
            <div>
              {isUmpEmail ? (null) : (<ShowEmailAlert/>)}
            </div>
            </form>
          </Grid>
          </div>
        </Container>
        </div>
    );
}
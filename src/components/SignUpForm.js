import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

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

  return (
    <Container className={classes.container}>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              label="First Name"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              label="Last Name"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="apogeeNumber"
              label="Apogee Number"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="birthdate"
              label="Birthdate"
              type="date"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Rejoindre
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

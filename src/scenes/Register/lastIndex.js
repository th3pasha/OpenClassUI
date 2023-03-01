import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
      background: 'linear-gradient(0deg, rgba(62,64,75,1) 0%, rgba(62,64,75,1) 75%, rgba(40,43,54,1) 100%)',
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

function Register() {

    const classes = useStyles();
    const [isError, setError] = useState(false);
    
    return (
        
    );
}
export default Register;
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    box:{
        position:'relative',
        top:'5vh',
    },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    top:'15vh',
  },
  input: {
    margin: theme.spacing(1),
    width: '100%',
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const ChangePassword = () => {
  const classes = useStyles();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API to change password
    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className={classes.box}>
        <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
            className={classes.input}
            id="old-password"
            label="Old Password"
            type="password"
            value={oldPassword}
            onChange={handleOldPasswordChange}
            required
        />
        <TextField
            className={classes.input}
            id="new-password"
            label="New Password"
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            required
        />
        <TextField
            className={classes.input}
            id="confirm-password"
            label="Confirm New Password"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
        />
        <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
        >
            Save
        </Button>
        </form>
    </div>
  );
};

export default ChangePassword;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography } from '@material-ui/core';
import { Textarea, FormControl, Input } from '@mui/joy';

const useStyles = makeStyles((theme) => ({
  box: {
    position: 'relative',
    top: '10vh',
    left: '3vh',
  },
  input: {
    margin: theme.spacing(1),
    width: '90%',
  },
  button: {
    margin: theme.spacing(2),
    backgroundColor: 'inherit',
    color: '#EBECF0',
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
    <div>
      <Typography level="h2" fontSize="xl" sx={{ mb: 0.5, color: '#EBECF0', position:'relative', top:'1vh',left:'1vh' }}>
        Change your password :
      </Typography>
      <div className={classes.box}>

        <FormControl>
          <Input
            className={classes.input}
            id="old-password"
            placeholder="Old Password"
            type="password"
            variant="outlined"
            value={oldPassword}
            sx={{
              backgroundColor: 'inherit',
              color: '#EBECF0',
            }}
            onChange={handleOldPasswordChange}
            required
          />
          <Input
            className={classes.input}
            id="new-password"
            variant="outlined"
            placeholder="New Password"
            type="password"
            value={newPassword}
            sx={{
              backgroundColor: 'inherit',
              color: '#EBECF0',
            }}
            onChange={handleNewPasswordChange}
            required
          />
          <Input
            className={classes.input}
            id="confirm-password"
            variant="outlined"
            placeholder="Confirm New Password"
            type="password"
            sx={{
              backgroundColor: 'inherit',
              color: '#EBECF0',
            }}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </FormControl>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default ChangePassword;

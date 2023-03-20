import React, { useState } from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Alert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import jwt from 'jwt-decode';
import Cookies from 'universal-cookie';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import './style.css';


export default function SignIn() {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [user, setUser] = useState('');

  const id = cookies.get('userid');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');

  const [isUmpMail, setUmpMail] = useState(false);
  const [isReg, setReg] = useState(false);
  const [isError, setError] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleProgressClose = () => {
    setOpen(false);
  };

  const handleProgressToggle = () => {
    setOpen(!open);
  };

  const handleProgressClick = () => {
    handleProgressToggle();
    setTimeout(() => {
      handleProgressClose();
      navigate('/')
    }, 500);
  };


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setUmpMail(false);
    setError(false);
    setReg(false);
  };

  const userLogin = (jwt_token) => {
    const decoded = jwt(jwt_token);

    setUser(decoded);

    cookies.set("token", jwt_token, {
      expires: new Date(decoded.exp * 1000),
    });
  };

  const userIdent = (userId) => {
    cookies.set("userid", userId, {
      expires: new Date(userId.exp * 1000),
    });
  };

  function checkEmailFormat(email) {
    const regex = /^[a-z]+\.[a-z]+\d{2}@ump\.ac\.ma.*$/;
    return regex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkEmailFormat(email)) {
      axios.post("http://localhost:8080/v1/auth/login", { email, password })
        .then(response => {
          console.log(response);
          if (response.status === 200) {
            setReg(true)
            userIdent(response.data.id);
            userLogin(response.data.token);
            setTimeout(() => {
              handleProgressClick();
            }, 300);
          }
        })
        .catch(error => {
          setError(true)
        });
    }
    else {
      setError(false);
      setUmpMail(true);
    }
  }

  return (
    <div>
      <CssVarsProvider>
          <form noValidate onSubmit={handleSubmit}>
          <Sheet
            sx={{
              width: 300,
              mx: 'auto', // margin left & right
              my: 4, // margin top & botom
              py: 3, // padding top & bottom
              px: 2, // padding left & right
              display: 'flex',
              backgroundColor: '#BDBDBD',
              flexDirection: 'column',
              gap: 2,
              borderRadius: 'sm',
            }}
            variant="outlined"
          >
            <div>
              <Typography level="h4" component="h1">
                <b>Welcome!</b>
              </Typography>
              <Typography level="body2">Sign in to continue.</Typography>
            </div>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                // html input attribute
                name="email"
                type="email"
                placeholder="john.doe21@ump.ac.ma"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                // html input attribute
                name="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </FormControl>

            <Button sx={{ mt: 1 /* margin top */ }}  type="submit" >Log in</Button>
            <Typography
              endDecorator={<Link href="/register">Sign up</Link>}
              fontSize="sm"
              sx={{ alignSelf: 'center' }}
            >
              Don&apos;t have an account?
            </Typography>
          </Sheet>
          </form>
      </CssVarsProvider>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleProgressClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={isUmpMail} autoHideDuration={5000} onClose={handleClose}>
          <Alert variant="filled" color="warning" onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
            Please use an valid @ump.ac.ma email !
          </Alert>
        </Snackbar>
        <Snackbar open={isReg} autoHideDuration={5000} onClose={handleClose}>
          <Alert variant="filled" color="success" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Welcome {first_name} {last_name} !
          </Alert>
        </Snackbar>
        <Snackbar open={isError} autoHideDuration={5000} onClose={handleClose}>
          <Alert variant="filled" color="error" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Incorrect email or password, try again !
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
};
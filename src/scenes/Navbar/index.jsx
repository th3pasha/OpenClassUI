import React, { useContext, useState } from 'react';
import { Button } from '@mui/material';
import StudentInfo from '../../components/StudentInfo';
import { Box, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Cookies from 'universal-cookie';
import StudentsList from '../../components/Students';
import Post from '../../components/Post';
import Posts from '../../components/Posts';
import Speed from '../../components/Speedial';
import "./navbar.css";


export default function Home() {
  const [user, setUser] = useState('');
  const cookies = new Cookies();
  const navigate = useNavigate();

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

  const SignOut = () => {
    setUser(null);
    cookies.remove('token');
    cookies.remove('userid');
    handleProgressClick();
  }

  return (
    <div className="home-page">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Button variant="text" href="/home">Home</Button>
          </li>
          <li className="nav-item">
            <Button href="/class">Class</Button>
          </li>
          <li className="nav-item">
            <Button href="/assignment">Assignment</Button>
          </li>
          <li className="nav-item">
            <Button href="/groupchat">GroupChat</Button>
          </li>
        </ul>
        <ul className="nav-list nav-list-right">
          <li className="nav-item">
            <Button href="/account" className="sign-in-button">My Account</Button>
          </li>
          <li className="nav-item">
            <Button onClick={SignOut} variant="outlined">LOG OUT</Button>
          </li>
        </ul>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleProgressClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </nav>
      <main>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={15} md={3} sx={{position:'fixed', top: '2' , left: '0'}}>
              <StudentInfo />
            </Grid>
            <Grid item xs={20} md={16}>
              <Grid container spacing={5}>
                <Grid item xs={20} md={30}>
                  <Post />
                </Grid>
                <Grid item xs={12} md={18}>
                  <Posts />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3} sx={{position:'fixed', top: '2' , right: '0'}}>
              <StudentsList />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}


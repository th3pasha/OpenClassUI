import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { IconButton, List, ListItem, ListItemText, Avatar, Typography, ListItemIcon } from '@material-ui/core';
import { Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/joy/CircularProgress';
import HomeIcon from '@mui/icons-material/Home';
import ThreePIcon from '@mui/icons-material/ThreeP';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  buttonList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 'auto',
  },
  listItemButton: {
    height: 50,
    width: 60,
    margin: 10,
    top: 300,
    borderRadius: '15px',

  },
  listItemIcon: {
    fontSize: 'large',
    color: 'white',
    '&:hover': {
      color: theme.palette.primary.main,
      cursor: 'pointer',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '50%',
        height: 2,
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  avatar: {
    width: 50,
    height: 50,
    margin: 25,
    top: 580,
  },
  logout: {
    top: 550,
    margin: 30,
    color: 'white',
  },
  sidebar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: 140,
    height: '100%',
    backgroundColor: 'rgb(40,43,54)',
    padding: 16,
    boxSizing: 'border-box',
    overflowY: 'auto',
  },
  profile: {

  },
}));

export default function Sidebar() {
  const classes = useStyles();
  const cookies = new Cookies();
  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState();
  const [isAvatar, setAvatar] = useState(false);
  const [isFetched, setFetched] = useState(false);
  const id = cookies.get('userid');

  const fetchAvatar = async () => {
    setAvatar(false);
    await axios.get("http://localhost:8080/v1/auth/student/files/"+id+".png", {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then((response) => {
            const images = response.data;
            setImages("http://localhost:8080/v1/auth/student/files/"+id+".png");
            setAvatar(true);
        });
  }

  const fetchName = async() =>
  {
    await axios
      .get('http://localhost:8080/v1/auth/student/' + id)
      .then(response => { 
        setName(response.data.lastName.toUpperCase());
        setFetched(false); })
  }

  useEffect(() => {
    fetchAvatar();
    fetchName();
  }, []);


  const handleOpenChat = () => {
    handleProgressToggle();
    setTimeout(() => {
      handleProgressClose();
      navigate('/openchat');
    }, 500);
  }
  const handleHome = () => {
    handleProgressToggle();
    setTimeout(() => {
      handleProgressClose();
      navigate('/');
    }, 500);
  }
  const handleSettings = () => {
    handleProgressToggle();
    setTimeout(() => {
      handleProgressClose();
      navigate('/account');
    }, 500);
  }

  const handleProgressClose = () => {
    setOpen(false);
  };

  const handleProgressToggle = () => {
    setOpen(!open);
  };

  const handleProgressClick = () => {
    handleProgressToggle();
    handleLogout();
    setTimeout(() => {
      handleProgressClose();
      navigate('/');
    }, 500);
  };

  function handleLogout() {
    setUser(null);
    cookies.remove('token');
    cookies.remove('userid');
  }

  return (
    <div>
      <div className={classes.sidebar}>
        <div className={classes.buttonList}>
          <List>
            <ListItem button className={classes.listItemButton}>
              <ListItemIcon className={classes.listItemIcon} onClick={handleHome}>
                <HomeIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem button className={classes.listItemButton} >
              <ListItemIcon className={classes.listItemIcon} onClick={handleOpenChat}>
                <ThreePIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem button className={classes.listItemButton} >
              <ListItemIcon className={classes.listItemIcon} onClick={handleSettings}>
                <SettingsIcon />
              </ListItemIcon>
            </ListItem>
          </List>
        </div>
        <div className={classes.profile}>
          {isAvatar ? (<Avatar className={classes.avatar} src={images} />) : (<Avatar className={classes.avatar}>{Array.from(name)[0]}</Avatar>)}
          <IconButton aria-label="sign out" className={classes.logout} onClick={handleProgressClick}>
            <LogoutIcon />
          </IconButton>
        </div>
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleProgressClose}
      >
        <CircularProgress
          size="md"
          value={50}
          variant="solid"
        />
      </Backdrop>
    </div>
  );
}
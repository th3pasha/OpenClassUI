import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { IconButton, List, ListItem, ListItemText, Avatar, Typography, ListItemIcon } from '@material-ui/core';
import Cookies from 'universal-cookie';
import HomeIcon from '@mui/icons-material/Home';
import ThreePIcon from '@mui/icons-material/ThreeP';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

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
    color:'white',
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
    top : 580,
  },
  logout: {
    top : 550,
    margin: 30,
    color:'white',
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
}));

export default function Sidebar() {
  const classes = useStyles();
  const [user, setUser] = useState('');
  const cookies = new Cookies();
  const navigate = useNavigate();

  function handleLogout()
  {
    setUser(null);
    cookies.remove('token');
    cookies.remove('userid');
    navigate('/');
  }

  return (
    <div>
      <div className={classes.sidebar}>
        <div className={classes.buttonList}>
          <List>
            <ListItem button className={classes.listItemButton}>
              <ListItemIcon className={classes.listItemIcon}>
                <HomeIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem button className={classes.listItemButton}>
              <ListItemIcon className={classes.listItemIcon}>
                <ThreePIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem button className={classes.listItemButton}>
              <ListItemIcon className={classes.listItemIcon}>
                <SettingsIcon />
              </ListItemIcon>
            </ListItem>
          </List>
        </div>
        <div className={classes.profile}>
          <Avatar className={classes.avatar}>U</Avatar>
          <IconButton aria-label="sign out" className={classes.logout} onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
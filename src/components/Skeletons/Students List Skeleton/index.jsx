import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({

    list:
    {
      position : 'relative',
    },
    avatar:
    {
      position : 'relative',
      top:'5px',
      left:'5px',
    },
    name:{
      position : 'relative',
      top:'5px',
      left:'10px',
    },
    email:
    {
      position :'relative',
      top:'10px',
      left:'1px',
    },
}));

export default function Variants() {

    const classes = useStyles();

  return (
    <div className={classes.list}>
      <List>
        <ListItem>
          <Skeleton className = {classes.avatar} variant="circular" width={40} height={40}/>
          <Skeleton className = {classes.name} variant="text" width={100} height={30}/>
          <Skeleton className = {classes.email} variant="text" width={200} height={30}/>
        </ListItem>
      </List>
      {/* For variant="text", adjust the height via font-size */}
      {/* For other variants, adjust the size with `width` and `height` */}
    </div>
  );
}
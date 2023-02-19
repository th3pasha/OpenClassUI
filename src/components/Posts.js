import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => (
{
    userInfo: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.grey[200],
    },
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

export default function StudentInfo()
{
    const classes = useStyles();

    return (
        <div className={classes.post}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Avatar alt="User Avatar" src="/path/to/avatar.jpg" className={classes.avatar} />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="post-input"
                  label="What's on your mind?"
                  fullWidth
                  multiline
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={2}>
                <IconButton>
                    <Typography variant = "h6"> AVATAT IMG URL</Typography>
                </IconButton>
              </Grid>
              <Grid item xs={10}>
                <Button variant="contained" color="primary">
                  Post
                </Button>
              </Grid>
            </Grid>
          </div>
    );
}

import React, { useState } from 'react';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: '0 auto',
  },
  textField: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export default function Post({ avatarUrl }) {
  const classes = useStyles();
  const [postContent, setPostContent] = useState('');

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };

  const handlePostClick = () => {
    console.log(postContent); // replace with actual post submission logic
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={avatarUrl} />}
        title="Create a Post"
      />
      <CardContent>
        <TextField
          className={classes.textField}
          label="What's on your mind?"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={postContent}
          onChange={handlePostContentChange}
        />
      </CardContent>
      <CardActions>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handlePostClick}
        >
          Post
        </Button>
      </CardActions>
    </Card>
  );
}
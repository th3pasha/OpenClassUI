import React, { useState } from 'react';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Cookies from "universal-cookie";
import axios from 'axios';

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
    const [content, setContent] = useState('');

    const cookies = new Cookies();
    const id = cookies.get('userid');

    const handlePostContentChange = (event) => {
        setContent(event.target.value);
    };

    const handlePostClick = () => {
        axios.post('http://localhost:8080/v1/auth/posts/' + id + '/', {content})
        .then(response => {
           console.log(response.data);
        })
        .catch(error => {
            
        });
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
                    value={content}
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
import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, TextField } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        borderRadius: '15px',
        margin: '0 auto',
    },
    textField: {
        marginTop: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

export default function Posts() {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/v1/auth/posts")
            .then((response) => {
                setPosts(response.data.content);
                console.log(response.data);
            });
    }, []);

    return (
        <Card className={classes.root}>
            <CardContent>
                {posts.map((post) => (
                    <Card className={classes.post}>
                        <CardHeader
                            avatar={<Avatar alt='A' />}
                            title={post.id}
                            subheader="now"
                        />
                        <CardContent>
                            {post.content}
                        </CardContent>
                        <CardActions>
                            <Stack direction="row" spacing={2}>
                                <IconButton>
                                    <ThumbUpIcon/>
                                </IconButton>
                                <IconButton>
                                    <ThumbDownIcon/>
                                </IconButton>
                            </Stack>
                        </CardActions>
                    </Card>
    ))
}
            </CardContent >
        </Card >
    );
}

import React, { useState, useEffect } from 'react';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
                    </Card>
                ))}
            </CardContent>
        </Card>
    );
}

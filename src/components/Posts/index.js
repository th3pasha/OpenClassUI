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
        maxWidth: 800,
        borderRadius: '15px',
        margin: '0 auto',
        backgroundColor:'rgb(62,64,75)',
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
    const [data, setData] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/v1/auth/student")
            .then((response) => {
                setData(response.data.content);
            });
    }, []);

    return (
        <Card className={classes.root}>
            <CardContent>
                {data.map((user) => {
                    if (user.posts.length > 0) {
                        return user.posts.map((post) => (
                            <React.Fragment key={post.id}>
                                <Card className={classes.post} key={post.id}>
                                    <CardHeader
                                        avatar={<Avatar alt='' />}
                                        title={user.firstName + ' ' + user.lastName}
                                        subheader="now"
                                    />
                                    <CardContent>{post.content}</CardContent>
                                </Card>
                                <CardActions>
                                    <Stack direction="row" spacing={2}>
                                        <IconButton>
                                            <ThumbUpIcon />
                                        </IconButton>
                                        <IconButton>
                                            <ThumbDownIcon />
                                        </IconButton>
                                    </Stack>
                                </CardActions>
                            </React.Fragment>
                        ));
                    } else {
                        return null;
                    }
                })}
            </CardContent>
        </Card>

    );
}

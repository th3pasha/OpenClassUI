import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, TextField } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import axios from 'axios';
import { Container } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '15px',
        margin: '0 auto',
        backgroundColor: 'rgb(62,64,75)',
    },
    textField: {
        marginTop: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
    },
    post:
    {
        backgroundColor: 'rgb(62,64,75)',
    },
    box:
    {
        height: '20px',
        backgroundColor: 'rgb(40,43,54)',
    },
    div:
    {
        width: '70vh',
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
        <div className={classes.div}>
            {data.map((user) => {
                if (user.posts.length > 0) {
                    return user.posts.map((post) => (
                        <Container container spacing={5}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <React.Fragment key={post.id}>
                                        <Card className={classes.post} key={post.id}>
                                            <CardHeader
                                                avatar={<Avatar>{ }</Avatar>}
                                                title={user.firstName + ' ' + user.lastName}
                                                subheader="now"
                                                className={classes.cardheader}
                                            />
                                            <CardContent className={classes.postcontent}>{post.content}</CardContent>
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
                                </CardContent>
                            </Card>
                            <Box className={classes.box} />
                        </Container>
                    ));
                } else {
                    return null;
                }
            })}

        </div>
    );
}

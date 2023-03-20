import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, TextField } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import axios from 'axios';
import './posts.css';
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
    comments:
    {
        backgroundColor: 'rgb(62,64,75)',
    },
}));

export default function Posts() {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [image, setImages] = useState([]);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    }
    

    useEffect(() => {
        axios.get("http://localhost:8080/v1/auth/student")
            .then((response) => {
                setData(response.data.content);
            });
        axios.get("http://localhost:8080/v1/auth/student/files", {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                const images = response.data;
                setImages(images);
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
                                            <CardContent className={classes.postcontent}>
                                                {post.content}
                                                {image.map(image => (
                                                <img 
                                                    className={isFullScreen ? "full-screen" : "normal-screen" }
                                                    src={image.url} 
                                                    alt={image.name} 
                                                    key={image.id} 
                                                    onClick={toggleFullScreen}
                                                />
                                                ))}
                                            </CardContent>
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
                                            <Accordion sx={{ backgroundColor: 'inherit' }}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                >
                                                    <Typography>Comments</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
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

        </div >
    );
}

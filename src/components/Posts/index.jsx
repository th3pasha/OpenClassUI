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
import Comments from '../Comments';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Container } from '@mui/material';  
import './posts.css';

const cookies = new Cookies();
const id = cookies.get('userid');


const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '15px',
        margin: '0 auto',
        backgroundColor: '#343A46',
    },
    textField: {
        marginTop: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
    },
    post:
    {
        backgroundColor: '#343A46',
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
        backgroundColor: '#343A46',
    },
    cardheader:
    {
        color: '#EBECF0',
    },
    postcontent:
    {
        color:'#EBECF0',
    },
}));

export default function Posts() {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [image, setImages] = useState([]);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isFetched, setFetched] = useState(false);
    const [isImage, setIsImage] = useState(true);

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    }

    const fetchPosts = async() =>
    {
       await axios.get("http://localhost:8080/v1/auth/student")
            .then((response) => {
                setData(response.data.content);
            });
    }

    function fetchImages(postid)
    {
        axios.get("http://localhost:8080/v1/auth/student/files/" + postid + ".png")
            .then((response) => {
                if(response.status === 200)
                {
                    setIsImage(true);
                }
                else{
                    setIsImage(false);
                } 
            });

        if(setIsImage)
        {
            return "http://localhost:8080/v1/auth/student/files/" + postid + ".png";
        }
        else
        {
            
        }
    }

    function fetchAvatars(id){
        let avatarUrl
        axios.get("http://localhost:8080/v1/auth/student/files/"+id+".png", {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
               avatarUrl = "http://localhost:8080/v1/auth/student/files/"+id+".png";
            });
        return avatarUrl;
    }

    useEffect(() => {
        fetchPosts();
        fetchAvatars();
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
                                                avatar={<Avatar className={classes.avatar} src={fetchAvatars(user.id)} />}
                                                title={user.firstName + ' ' + user.lastName}
                                                subheader="now"
                                                className={classes.cardheader}
                                            />
                                            <CardContent className={classes.postcontent}>
                                                {post.content}
                                                {isImage ?  
                                                (<img
                                                        className={isFullScreen ? "full-screen" : "normal-screen"}
                                                        src={fetchImages(post.id)}
                                                        onClick={toggleFullScreen}
                                                    />) : (null) }
                                            </CardContent>
                                        </Card>
                                        <CardActions>
                                            <Accordion sx={{ backgroundColor: '#343A46' }}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                >
                                                    <Typography sx={{color :'#EBECF0'}}>Comments</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Comments />
                                                </AccordionDetails>
                                            </Accordion>
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

        </div >
    );
}
